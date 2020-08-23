# Travel App Project

## Overview
This project requires you to create an asynchronous web app that uses Web APIs and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Process
## Skeleton Code
The foundation of this project was project 3 from udacity's frontend nanodegree bootcamp, after it had been completed. For that project, all files were provided by Udacity to provide a foundation, but I styled the page and completed its functionality.

### Server file
First I set up my server file to use express, body-parser, and cors as well as other libraries. I set the port and the get/ post routes in this file as well. I also set up the webpack dev server to use in development.

### App.js file
This file holds the API keys and only one of the base URLs- the other two use template literals, so they are in the helper function file. I set up the main workflow of my project in this app: once the page is loaded, an event listener is set to performAction() if the button is clicked.

Perform actions first gets the user input, checks its validity, and then gets the lattitude and longitude as well as other info from geonames api. Then it saves the data to the server side and updates the client side data to match (by retrieving from the server side). The geonames info is sent to the weatherbit API to get weatehr data for the user's destination. The data is updated on both sides again, and then finally the UI is updated to include the city name from geonames, some weather data from weatherbit, and a related image from pixabay's api. The html fields are updated dynamicalls in the updateUI function.

## Helpers.js file (helper functions)
Functions included:
- getCountdown: finds days left until departure for trip
- tomorrow: increment date by 1 day
- lastYear: decrement date by 1 year
- getLatLong: queries geonames API using user input
- getInfo: extracts useful info from weatherbit API after query
- getWeather: queries weatherbit apiand then uses getInfo
- getImgURL: extracts url of first img returned from pixabay query
- getPic: uses geonames info to query pixabay API

## Countries.js file
Geonames returns country codes instead of full country names as strings, so this file uses case switching to convert the country codes to strings for querying other api's and updating the UI.


