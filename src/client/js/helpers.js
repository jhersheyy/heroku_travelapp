import {getCountry} from './countries'

/*Find difference between today and given date "ddate" */
function getCountdown(ddate){
    let d = new Date();// Create a new date instance
    let dd = new Date(ddate);//convert input date to Date obj
    const day_in_ms = 1000 * 60 * 60 * 24 ;
    //get dates in ms
    let d_full = Date.UTC(d.getFullYear(), (d.getMonth()), d.getDate());
    let dd_full= Date.UTC(dd.getFullYear(), (dd.getMonth()), dd.getDate()); 
    let result= Math.floor(dd_full-d_full)/day_in_ms;//conert back to days
    return result;
  }

/*Gets date after given date*/
function tomorrow(date){
  let d = new Date(date);
  let copy = new Date(date);
  copy.setDate(d.getDate()+1);
  return copy.toISOString().slice(0,10);//formats into yyyy-mm-dd
}

/*converts date to last year of history*/
function lastYear(d){
  let date = new Date(d);
  let copy = new Date(d);//date;
  copy.setFullYear(date.getFullYear()-1);
  return copy.toISOString().slice(0,10); //formats into yyyy-mm-dd
}

/*Get Geonames API Location info*/
const getLatLong = async(url, location, key)=>{
  const res = await fetch(url+location+key)
  try{
    const data = await res.json();
    if (data.postalCodes.length == 0){
      alert("Please enter a valid location.");
    } else{
      alert("Getting data now~ Please wait...");
    return data.postalCodes[0];
    }
  } catch(error){
    console.log("error in getLatLong():: ",error)
  }
}

/*Take in object from weatherbit query, return object of helpful info*/
function getInfo(dataObj){
  let result ={};
  result.max = dataObj.max_temp;
  result.min = dataObj.min_temp;
  result.temp = dataObj.temp;
  result.snow = dataObj.snow;
  result.clouds = dataObj.clouds;
  result.humidity= dataObj.rh;
  return result;
}

/*Get Weatherbit API Weather Data*/
const getWeather = async (lat, long, date, key)=>{
    let weatherURL='';
    if (getCountdown(date) > 16){
      alert("Notice: Date too far in future! Finding last year's weather instead! =)");
      date = lastYear(date);
      let endDate = tomorrow(date);
      weatherURL=`https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${long}&start_date=${date}&end_date=${endDate}&units=I&key=${key}`;
    }
    else{
      weatherURL=`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${long}&units=I&key=${key}`;
    }
    const res = await fetch(weatherURL)
    try {
      const data = await res.json();
      if (weatherURL.includes('history')){//used historic api, only one item in data array
        return getInfo(data.data[0]);
      } else{//used 16-day forecast api, 16 items in array; use countdown+1
        let i= getCountdown(date)+1; //use countdown to get index
        return getInfo(data.data[i]);
      }
    } catch(error) {
      console.log("error in getWeather():: ", error);
    }
  }

  /*Takes in pixabay api result and extracts first images url*/
function getImgURL(pixdata){
  let newImg = pixdata.hits[0];
  let newImgURL = newImg.webformatURL;
  return newImgURL;
}

/*uses geonames api data from server side to query pixabay*/
const getPic= async(data,key)=>{//gData (geoinfo from proj data-sever)
  let query = encodeURI(data.city);
  let picURL= `https://pixabay.com/api/?key=${key}&q=${query}&safesearch=true&category=places`;
  const res = await fetch(picURL);
  try {
    const rdata = await res.json();
    if(rdata.totalHits == 0){//city got no results->region
      query = encodeURI(data.region); //change query to use region instead of city
      picURL= `https://pixabay.com/api/?key=${key}&q=${query}&safesearch=true&category=places`;
      const redo = await fetch(picURL);
      const newData= await redo.json();
      if (newData.totalHits==0){//region got no results->use country
        query = encodeURI(getCountry(data.country));//convert country code to string for query
        picURL= `https://pixabay.com/api/?key=${key}&q=${query}&safesearch=true&category=places`;
        const redo2 = await fetch(picURL);
        const newData2= await redo2.json();
        return getImgURL(newData2);
      } else{
        return getImgURL(newData);
      }
    } else{
      return getImgURL(rdata);
    }
  } catch(error) {
    console.log("error in getPic():: ", error);
  }}

export{ getLatLong, 
        getWeather,
        getCountdown,
        getPic,
        getImgURL
      }
  