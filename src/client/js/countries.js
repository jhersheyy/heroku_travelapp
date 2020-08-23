function getCountry(ccode){//takes in country code, returns country string
    let output = '';
    if (ccode.startsWith("A")){
        switch (ccode){
            case "AD":
                output = "Andorra";
                break;
            case "AE":
                output = "United Arab Emirates";
                break;
            case "AF":
                output = "Afghanistan";
                break; 
            case "AG":
                output = "Antigua and Barbuda";
                break; 
            case "AI":
                output = "Anguilla";
                break;
            case "AL":
                output = "Albania";
                break;
            case "AM":
                output = "Armenia";
                break;
            case "AN":
                output = "Netherlands Antilles";
                break; 
            case "AO":
                output = "Angola";
                break; 
            case "AQ":
                output = "Antarctica";
                break;     
            case "AR":
                output = "Argentina";
                break;
            case "AS":
                output = "American Samoa";
                break;
            case "AT":
                output = "Austria";
                break; 
            case "AU":
                output = "Australia";
                break; 
            case "AW":
                output = "Aruba";
                break;
            case "AX":
                output = "Åland";
                break; 
            case "AZ":
                output = "Azerbaijan";
        }
     } else if (ccode.startsWith("B")){
        switch (ccode){
            case "BA":
                output = "Bosnia and Herzegovina";
                break;
            case "BB":
                output = "Barbados";
                break;
            case "BD":
                output = "Bangladesh";
                break; 
            case "BE":
                output = "Belgium";
                break; 
            case "BF":
                output = "Burkina Faso";
                break;
            case "BG":
                output = "Bulgaria";
                break;
            case "BH":
                output = "Bahrain";
                break;
            case "BI":
                output = "Burundi";
                break;
            case "BJ":
                output = "Benin";
                break; 
            case "BL":
                output = "Saint Barthélemy";
                break; 
            case "BM":
                output = "Bermuda";
                break;
            case "BN":
                output = "Brunei";
                break; 
            case "BO":
                output = "Bolivia";
                break; 
            case "BQ":
                output = "Caribbean Netherlands";//specifically bonaire,sint eustatius, and saba
                break;
            case "BR":
                output = "Brazil";
                break; 
            case "BS":
                output = "Bahamas";
                break; 
            case "BT":
                output = "Bhutan";
                break;
            case "BV":
                output = "Bouvet Island";
                break; 
            case "BW":
                output = "Botswana";
                break; 
            case "BY":
                output = "Belarus";
                break;
            case "BZ":
                output = "Belize";
        }
    }else if (ccode.startsWith("C")){
        switch (ccode){
            case "CA":
                output = "Canada";
                break;
            case "CC":
                output = "Cocos Islands";
                break;
            case "CD":
                output = "Democratic Republic of the Congo";
                break; 
            case "CF":
                output = "Central African Republic";
                break; 
            case "CG":
                output = "Congo Republic";
                break;
            case "CH":
                output = "Switzerland";
                break;
            case "CI":
                output = "Ivory Coast";
                break;
            case "CK":
                output = "Cook Islands";
                break; 
            case "CL":
                output = "Chile";
                break; 
            case "CM":
                output = "Cameroon";
                break;
            case "CN":
                output = "China";
                break;
            case "CO":
                output = "Colombia";
                break;
            case "CR":
                output = "Costa Rica";
                break; 
            case "CS":
                output = "Serbia and Montenegro";
                break; 
            case "CU":
                output = "Cuba";
                break;
            case "CV":
                output = "Cabo Verde";
                break;
            case "CW":
                output = "Curacao";//ç
                break;
            case "CX":
                output = "Christmas Island";
                break; 
            case "CY":
                output = "Cyprus";
                break; 
            case "CZ":
                output = "Czechia";
        }
    }else if (ccode.startsWith("D")||ccode.startsWith("E")||ccode.startsWith("F")){
        switch (ccode){
            case "DE":
                output = "Germany";
                break;
            case "DJ":
                output = "Djibouti";
                break;
            case "DK":
                output = "Denmark";
                break; 
            case "DM":
                output = "Dominica";
                break; 
            case "DO":
                output = "Dominican Republic";
                break;
            case "DZ":
                output = "Algeria";
                break;
            case "EC":
                output = "Ecuador";
                break;
            case "EE":
                output = "Estonia";
                break; 
            case "EG":
                output = "Egypt";
                break; 
            case "EH":
                output = "Western Sahara";
                break;
            case "ER":
                output = "Eritrea";
                break;
            case "ES":
                output = "Spain";
                break;
            case "ET":
                output = "Ethiopia";
                break; 
            case "FI":
                output = "Finland";
                break; 
            case "FJ":
                output = "Fiji";
                break;
            case "FK":
                output = "Falkland Islands";
                break;
            case "FM":
                output = "MicroNesia";
                break;
            case "FO":
                output = "Faroe Islands";
                break; 
            case "FR":
                output = "France";
        }
    } else if (ccode.startsWith("G")||ccode.startsWith("H")){
        switch (ccode){
            case "GA":
                output = "Gabon";
                break;
            case "GB":
                output = "United Kingdom";
                break;
            case "GD":
                output = "Grenada";
                break; 
            case "GE":
                output = "Georgia";
                break; 
            case "GF":
                output = "French Guiana";
                break;
            case "GG":
                output = "Guernsey";
                break;
            case "GH":
                output = "Ghana";
                break;
            case "GI":
                output = "Gibraltar";
                break; 
            case "GL":
                output = "Greenland";
                break; 
            case "GM":
                output = "Gambia";
                break;
            case "GN":
                output = "Guinea";
                break; 
            case "GP":
                output = "Guadeloupe";
                break;
            case "GQ":
                output = "Equatorial Guinea";
                break;
            case "GR":
                output = "Greece";
                break;
            case "GS":
                output = "South Georgia and South Sandwich Islands";
                break; 
            case "GT":
                output = "Guatemala";
                break; 
            case "GU":
                output = "Guam";
                break;
            case "GW":
                output = "Guinea-Bissau";
                break;
            case "GY":
                output = "Guyana";
                break;
            case "HK":
                output = "Hong Kong";
                break; 
            case "HM":
                output = "Heard Island and McDonald Islands";
                break; 
            case "HN":
                output = "Honduras";
                break;
            case "HR":
                output = "Croatia";
                break;
            case "HT":
                output = "Haiti";
                break;
            case "HU":
                output = "Hungary";
        }
    } else if (ccode.startsWith("I")||ccode.startsWith("J")||ccode.startsWith("K")){
        switch (ccode){
            case "ID":
                output = "Indonesia";
                break;
            case "IE":
                output = "Ireland";
                break;
            case "IL":
                output = "Israel";
                break; 
            case "IM":
                output = "Isle of Man";
                break; 
            case "IN":
                output = "India";
                break;
            case "IO":
                output = "British Indian Ocean Territory";
                break;
            case "IQ":
                output = "Iraq";
                break;
            case "IR":
                output = "Iran";
                break; 
            case "IS":
                output = "Iceland";
                break; 
            case "IT":
                output = "Italy";
                break;
            case "JE":
                output = "Jersey";
                break; 
            case "JM":
                output = "Jamaica";
                break;
            case "JO":
                output = "Jordan";
                break;
            case "JP":
                output = "Japan";
                break;
            case "KE":
                output = "Kenya";
                break; 
            case "KG":
                output = "Kyrgyzstan";
                break; 
            case "KG":
                output = "Cambodia";
                break;
            case "KI":
                output = "Kiribati";
                break;
            case "KM":
                output = "Comoros";
                break; 
            case "KN":
                output = "St Kitts and Nevis";
                break;
            case "KP":
                output = "North Korea";
                break;
            case "KR":
                output = "South Korea";
                break; 
            case "KW":
                output = "Kuwait";
                break; 
            case "KY":
                output = "Cayman Islands";
                break;
            case "KZ":
                output = "Kazakhstan";
        }
    }else if (ccode.startsWith("L")||ccode.startsWith("M")){
        switch (ccode){
            case "LA":
                output = "Laos";
                break;
            case "LB":
                output = "Lebanon";
                break;
            case "LC":
                output = "Saint Lucia";
                break; 
            case "LI":
                output = "Liechtenstein";
                break; 
            case "LK":
                output = "Sri Lanka";
                break;
            case "LR":
                output = "Liberia";
                break;
            case "LS":
                output = "Lesotho";
                break;
            case "LT":
                output = "Lithuania";
                break; 
            case "LU":
                output = "Luxembourg";
                break; 
            case "LV":
                output = "Latvia";
                break;
            case "LY":
                output = "Libya";
                break; 
            case "MA":
                output = "Morocco";
                break;
            case "MC":
                output = "Monaco";
                break;
            case "MD":
                output = "Moldova";
                break;
            case "ME":
                output = "Montenegro";
                break; 
            case "MF":
                output = "Saint Martin";
                break; 
            case "MG":
                output = "Madagascar";
                break;
            case "MH":
                output = "Marshall Islands";
                break; 
            case "MK":
                output = "North Macedonia";
                break;
            case "ML":
                output = "Mali";
                break;
            case "MM":
                output = "Myanmar";
                break;
            case "MN":
                output = "Mongolia";
                break;
            case "MO":
                output = "Macao";
                break; 
            case "MP":
                output = "Northern Mariana Islands";
                break; 
            case "MQ":
                output = "Martinique";
                break;
            case "MR":
                output = "Mauritania";
                break; 
            case "MS":
                output = "Montserrat";
                break;
            case "MT":
                output = "Malta";
                break;
            case "MU":
                output = "Mauritius";
                break;
            case "MV":
                output = "Maldives";
                break; 
            case "MW":
                output = "Malawi";
                break; 
            case "MX":
                output = "Mexico";
                break;
            case "MY":
                output = "Malaysia";
                break;
            case "MZ":
                output = "Mozambique";
        }
    } else if (ccode.startsWith("N")||ccode.startsWith("O")||ccode.startsWith("P")){
        switch (ccode){
            case "NA":
                output = "Namibia";
                break;
            case "NC":
                output = "New Caledonia";
                break;
            case "NE":
                output = "Niger";
                break; 
            case "NF":
                output = "Norfolk Island";
                break; 
            case "NG":
                output = "Nigeria";
                break;
            case "NI":
                output = "Nicaragua";
                break;
            case "NL":
                output = "Netherlands";
                break;
            case "NO":
                output = "Norway";
                break; 
            case "NP":
                output = "Nepal";
                break; 
            case "NR":
                output = "Nauru";
                break;
            case "NU":
                output = "Niue";
                break; 
            case "NZ":
                output = "New Zealand";
                break;
            case "OM":
                output = "Oman";
                break;
            case "PA":
                output = "Panama";
                break;
            case "PE":
                output = "Peru";
                break; 
            case "PF":
                output = "French Polynesia";
                break; 
            case "PG":
                output = "Papua New Guinea";
                break;
            case "PH":
                output = "Philippines";
                break; 
            case "PK":
                output = "Pakistan";
                break;
            case "PL":
                output = "Poland";
                break;
            case "PM":
                output = "Saint Pierre and Miquelon";
                break;
            case "PN":
                output = "Pitcairn Islands";
                break; 
            case "PR":
                output = "Puerto Rico";
                break; 
            case "PS":
                output = "Palestine";
                break;
            case "PT":
                output = "Portugal";
                break; 
            case "PW":
                output = "Palau";
                break;
            case "PY":
                output = "Paraguay";
        }
    } else if (ccode.startsWith("Q")||ccode.startsWith("R")||ccode.startsWith("S")){
        switch (ccode){
            case "QA":
                output = "Qatar";
                break;
            case "RE":
                output = "Réunion";
                break;
            case "RO":
                output = "Romania";
                break; 
            case "RS":
                output = "Serbia";
                break; 
            case "RU":
                output = "Russia";
                break;
            case "RW":
                output = "Rwanda";
                break;
            case "SA":
                output = "Saudi Arabia";
                break;
            case "SB":
                output = "Solomon Islands";
                break; 
            case "SC":
                output = "Seychelles";
                break; 
            case "SD":
                output = "Sudan";
                break;
            case "SE":
                output = "Sweden";
                break; 
            case "SG":
                output = "Singapore";
                break;
            case "SH":
                output = "Saint Helena";
                break;
            case "SI":
                output = "Slovenia";
                break;
            case "SJ":
                output = "Svalbard";//svalbard and jan mayen
                break; 
            case "SK":
                output = "Slovakia";
                break; 
            case "SL":
                output = "Sierra Leone";
                break;
            case "SM":
                output = "San Marino";
                break; 
            case "SN":
                output = "Senegal";
                break;
            case "SO":
                output = "Somalia";
                break;
            case "SR":
                output = "Suriname";
                break;
            case "SS":
                output = "South Sudan";
                break; 
            case "ST":
                output = "Sao Tome";//ã,é
                break; 
            case "SV":
                output = "El Salvador";
                break;
            case "SX":
                output = "Sint Maarten";
                break; 
            case "SY":
                output = "Syria";
                break;
            case "SZ":
                output = "Eswatini";
        }
    }else {
        switch (ccode){
            case "TC":
                output = "Turks and Caicos Islands";
                break;
            case "TD":
                output = "Chad";
                break;
            case "TF":
                output = "French South Territories";
                break; 
            case "TG":
                output = "Togo";
                break; 
            case "TH":
                output = "Thailand";
                break;
            case "TJ":
                output = "Tajikistan";
                break;
            case "TK":
                output = "Tokelau";
                break;
            case "TL":
                output = "Timor-Leste";
                break; 
            case "TM":
                output = "Turkmenistan";
                break; 
            case "TN":
                output = "Tunisia";
                break;
            case "TO":
                output = "Tonga";
                break; 
            case "TR":
                output = "Turkey";
                break;
            case "TT":
                output = "Trinidad and Tobago";
                break;
            case "TV":
                output = "Tuvalu";
                break;
            case "TW":
                output = "Taiwan";
                break; 
            case "TZ":
                output = "Tanzania";
                break; 
            case "UA":
                output = "Ukraine";
                break;
            case "UG":
                output = "Uganda";
                break; 
            case "UM":
                output = "US Minor Outlying Islands";
                break;
            case "US":
                output = "United States";
                break;
            case "UY":
                output = "Uruguay";
                break;
            case "UZ":
                output = "Uzbekistan";
                break; 
            case "VA":
                output = "Vatican City";
                break; 
            case "VC":
                output = "St Vincent and Grenadines";
                break;
            case "VE":
                output = "Venezuela";
                break; 
            case "VG":
                output = "British Virgin Islands";
                break;
            case "VI":
                output = "US Virgin Islands";
                break;
            case "VN":
                output = "Vietnam";
                break;
            case "VU":
                output = "Vanuatu";
                break; 
            case "WF":
                output = "Wallis and Futuna";
                break; 
            case "WS":
                output = "Samoa";
                break;
            case "XK":
                output = "Kosovo";
                break; 
            case "YE":
                output = "Yemen";
                break; 
            case "YT":
                output = "Mayotte";
                break;
            case "ZA":
                output = "South Africa";
                break;
            case "ZM":
                output = "Zambia";
                break;
            case "ZW":
                output = "Zimbabwe";
        }
    }
    return output;
}
/* geonames version postalCodeSearch version: 
//muted codes based on this list here: https://www.geonames.org/export/free-geocoding.html
function getCountry(ccode){//takes in country code, returns country string
    let output = '';
    if (ccode.startsWith("A")){
        switch (ccode){
            case "AD":
                output = "Andorra";
                break; 
            case "AR":
                output = "Argentina";
            case "AT":
                output = "Austria";
                break; 
            case "AU":
                output = "Australia";
        }
     } else if (ccode.startsWith("B")){
        switch (ccode){
            case "BD":
                output = "Bangladesh";
                break; 
            case "BE":
                output = "Belgium";
                break; 
            case "BG":
                output = "Bulgaria";
                break;
            case "BR":
                output = "Brazil";
        }
    }else if (ccode.startsWith("C")){
        switch (ccode){
            case "CA":
                output = "Canada";
                break;
            case "CH":
                output = "Switzerland";
                break;
            case "CZ":
                output = "Czech Republic";//"Czechia";
        }
    }else if (ccode.startsWith("D")||ccode.startsWith("E")||ccode.startsWith("F")){
        switch (ccode){
            case "DE":
                output = "Germany";
                break;
            case "DK":
                output = "Denmark";
                break; 
            case "DO":
                output = "Dominican Republic";
                break;
            case "ES":
                output = "Spain";
                break;
            case "FI":
                output = "Finland";
                break; 
            case "FO":
                output = "Faroe Islands";
                break; 
            case "FR":
                output = "France";
        }
    } else if (ccode.startsWith("G")||ccode.startsWith("H")){
        switch (ccode){
            case "GB":
                output = "United Kingdom";
                break;
            case "GF":
                output = "French Guiana";
                break;
            case "GL":
                output = "Greenland";
                break; 
            case "GP":
                output = "Guadeloupe";
                break;
            case "GT":
                output = "Guatemala";
            case "HR":
                output = "Croatia";
                break;
            case "HU":
                output = "Hungary";
        }
    } else if (ccode.startsWith("I")||ccode.startsWith("J")||ccode.startsWith("K")){
        switch (ccode){
            case "IN":
                output = "India";
                break;
            case "IS":
                output = "Iceland";
                break; 
            case "IT":
                output = "Italy";
                break;
                break;
            case "JP":
                output = "Japan";
        }
    }else if (ccode.startsWith("L")||ccode.startsWith("M")){
        switch (ccode){
            case "LI":
                output = "Liechtenstein";
                break; 
            case "LK":
                output = "Sri Lanka";
                break;
            case "LT":
                output = "Lithuania";
                break; 
            case "LU":
                output = "Luxembourg";
            case "MC":
                output = "Monaco";
                break;
            case "MD":
                output = "Moldova";
                break;
            case "MK":
                output = "Macedonia";
                break;
            case "MQ":
                output = "Martinique";
                break;
            case "MX":
                output = "Mexico";
                break;
            case "MY":
                output = "Malaysia";
        }
    } else if (ccode.startsWith("N")||ccode.startsWith("O")||ccode.startsWith("P")){
        switch (ccode){
            case "NL":
                output = "Netherlands";
                break;
            case "NO":
                output = "Norway";
                break; 
            case "NZ":
                output = "New Zealand";
                break;
            case "PH":
                output = "Philippines";
                break; 
            case "PK":
                output = "Pakistan";
                break;
            case "PL":
                output = "Poland";
                break;
            case "PM":
                output = "Saint Pierre and Miquelon";
                break;
            case "PT":
                output = "Portugal";
        }
    } else if (ccode.startsWith("Q")||ccode.startsWith("R")||ccode.startsWith("S")){
        switch (ccode){
            case "RE":
                output = "Réunion";
                break;
            case "RU":
                output = "Russia";
                break;
            case "SE":
                output = "Sweden";
                break; 
            case "SI":
                output = "Slovenia";
                break;
            case "SK":
                output = "Slovakia";
                break; 
            case "SM":
                output = "San Marino";
        }
    }else {
        switch (ccode){
            case "TH":
                output = "Thailand";
                break;
            case "TR":
                output = "Turkey";
                break;
            case "US":
                output = "United States";
                break;
            case "VA":
                output = "Vatican City";
                break; 
            case "WF":
                output = "Wallis and Futuna";
                break; 
            case "YT":
                output = "Mayotte";
                break;
            case "ZA":
                output = "South Africa";
        }
    }//geonames postalsearch has no k, o, q, x cases
    return output;
}
*/
export {getCountry}