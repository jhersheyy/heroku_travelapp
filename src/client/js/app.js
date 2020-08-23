import {getLatLong} from './helpers'
import {getWeather} from './helpers'
import {getCountdown} from './helpers'
import {getPic} from './helpers'
import backupimg from '../media/img_na.png'
 
/* Global Variables */
let allData= {};//client side copy of projectData, updates as process request
const geoURL= 'http://api.geonames.org/postalCodeSearchJSON?placename='
const geoKey= '&maxRows=1&countryBias=US&username=jhersheyy' //note the US bias
//weatherURL's in function only (using template literals-were causing referenceErrors)
const weatherKey= '430488ce7d904004b4252036356fc59d';
//pixURL in function, also using template literals
const pixKey= '17824144-5c1b0272b392f2756cef29e29';

/*Primary func to export: Initial function= load pg-> then make event listener*/
function initPage(e){
  document.getElementById('generate').addEventListener('click', performAction);
}

/* Function called by event listener: main function*/
function performAction(e){
  //retrieve and store user input from UI
  let location =  document.getElementById('location').value; 
  let depDate = document.getElementById('dday').value;//format: 2020-08-20
  if (location==''||depDate==''){//check inputs filled out
    alert("Please enter valid info.");
  } else{
    //get and save how many days til trip date
    let countdown = getCountdown(depDate);
    postData('/add', {title: "countdown", data:{daysLeft: countdown}});

    //convert input location to lat,long with geonames api
   
    getLatLong(geoURL,location,geoKey)//returns object with loc info keys/ vals from api
    .then(function(geoData){//send g_info from api to server to save as project data
      try{
        let projData = {title: "geoInfo", data: {city: geoData.placeName, lat: geoData.lat, long: geoData.lng, region: geoData.adminName1, country: geoData.countryCode}};
        postData('/add', projData)
      } catch(error){
        console.log("error getting result from geonames API:: ",error)
        //return Promise.reject(error);
      }
    })
    .then(function(){//get serverside data
      allData = getProjData();
      return allData
    })
    .then(function(pData){//use server data to query weather api
      try{
        pData = pData['geoInfo'];//need geonames result only
        let lat = pData.lat;
        let long =pData.long; 
        let weatherInfo= getWeather(lat, long, depDate, weatherKey);//return object of info from api query
        return weatherInfo
      }catch(error){
        console.log("error getting result from weatherbit API:: ",error)
      }
    })  
    .then(function(wInfo){//send weatherData back to projectData on server side
      let weatherData = {title: "weatherInfo", data: wInfo};//format for projData
      postData('/add',weatherData);
    })
    .then(()=>{//updates ui with data and relevant img from pixabay
      try{
        updateUI(depDate)
      } catch(error){
        console.log("error updating web page:: ",error)
      }
    })
  }
}

const getProjData = async () =>{
  const request = await fetch('/all')
  try{
    allData = await request.json();
    return allData;
  } catch(error){
    console.log("error in getProjData():: ", error);
  }
}

function displayDest(data){
  let result = '';
  let dest = data['geoInfo'].city;
  let dreg = data['geoInfo'].region;
  let dctry= data['geoInfo'].country;
  if (data.geoInfo.hasOwnProperty('region')){
    result = `${dest}, ${dreg}, ${dctry}`;
  } else{ 
    result = `${dest}, ${dctry}`;
  }
  return result;
}

/*Gets image from pixabay and updates UI with project data and image*/
const updateUI = async (date) => {
  //retrieve final data from our app
  allData = await getProjData()
  .then(allData => {
    let gData = allData['geoInfo']; //get data to input to getPic()
    try{
      let picResult= getPic(gData, pixKey);//takes input, key
      return picResult
    } catch(error){
      console.log("error getting image from pixabay API:: ",error)
    }
  })
  .then(picResult=>{
    allData["imgURL"] = picResult;
    return allData})//returns url for image
  .then(data=>{
    let wData = data['weatherInfo'];
    let imgURL = data['imgURL'];
    let dest = displayDest(data);//gets string of destination
    if (imgURL === undefined){//update ui with DOM selectors
      document.querySelector('.mainimg').setAttribute('src', backupimg);
    } else{
      document.querySelector('.mainimg').setAttribute('src', imgURL);
    }
    document.querySelector('.title').innerHTML="*~Trip Details~*"
    document.getElementById('dest').innerHTML = dest;
    document.getElementById('date').innerHTML = "Departure: " + date;
    document.getElementById('temp').innerHTML = "Average Temp: " + wData.temp+"°F";
    document.getElementById('countdown').innerHTML=data.countdown.daysLeft+"days away...";
    document.getElementById('max').innerHTML = "Daily max: " +wData.max+"°F"; 
    document.getElementById('min').innerHTML = "Daily min: " + wData.min+"°F";
    document.getElementById('clouds').innerHTML = "Cloud coverage: " + wData.clouds+"%";
    document.getElementById('humidity').innerHTML = "Humidity: " + wData.humidity+"%";
  })
}

/* Function to POST data */
const postData = async ( url = '/add', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  })
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

export { initPage }