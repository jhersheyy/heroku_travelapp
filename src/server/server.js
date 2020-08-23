// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// Use dist html file for home route
  app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})
// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData (req, res) {
    res.send(projectData);
  };

// Post Route
app.post('/add', addPost);

function addPost(req,res){
  projectData[req.body.title] = req.body.data;
  res.send(projectData);
  console.log("pdata now set to: ", projectData)
};

module.exports = app