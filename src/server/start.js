// start.js
const app = require('./server.js')
const PORT = process.env.PORT || 8081;
const host = process.env.HOST || 'localhost';

// let portnum = process.env.PORT || 8081;
app.listen(PORT, host, listening);

// Callback to debug
function listening(){
    console.log(`JH Travel App now running on port 8081`);
  };

// // start.js
// const app = require('./server.js')
// let server_port = process.env.PORT || 8080 || 80;
// let server_host = process.env.HOST || 'localhost' || '0.0.0.0';
// // let PORT = server.listen(process.env.PORT || 8081);
// app.listen(server_port, server_host, () => {
//     console.log(`JH Travel App now running on port ${ PORT }`);
// });