//Import the js file to test
import { initPage } from "../src/client/js/app"
const app = require('../src/server/server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
//Define the input for the function.
// The describe() function takes two arguments - a string description,

describe("Testing the sever functionality", () => {
    //and a test suite as a callback function
    // The test() function has two arguments - a string description, 
    test("Testing the initPage() function", () => {
           // and an actual test as a callback function.  
           // Define the input for the function, if any, in the form of variables/array
           //var input = [];
           // Define the expected output, if any, in the form of variables/array
           //const result;
           // `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(initPage).toBeDefined();
})});


it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')
  
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('pass!')
    done()
  })
//Check if the function produces the expected output


