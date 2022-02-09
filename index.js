// http module : 
// It is an inbuilt module in JS which helps you to create the server. and receive the information from the front end application and send some response to the front end application.


// ES6
// import httpModule from "httpModule";

const http = require("http");


// using this module we are going to create the server
// createServer takes a callback function which will be receiving two parameters request and response 
// request will contain the information coming from front end 
// response will contain the information which is required to be sent back to the front end

console.log("Application has Started, check https://localhost:4000 to see the project running");

const server = http.createServer((request, response)=>{
    const userDetails = [{name:"janaki", age:14},{name:"Lalsa", age:5}]
    const user = {name:"Lalsa", age:5}
    response.write("Hello World !!")
    response.write("<h1>BY BYE</h1>")
    response.write(JSON.stringify(userDetails))
    response.end();
})

// We will be giving a port number to run our application on a specific port.
server.listen(4000);

// const server = http.createServer(function (request, response){
    
// })


// http.createServer((req, res)=>{
//     res.write("hey");
//     res.end();
// }).listen(4000);









// Request Method: GET
// Status Code: 200 OK

// Request method decides that what type of API you are having
// CRUD APPLICATION 
// GET : Sending the data to the front end 
// POST : Receive the data from the front end 
// UPDATE : Receive the data and update in DB
// DELETE : Receive the data from front end and delete in DB


// Status Code : Is a code which helps front end to understand that if the API is working fine or not 
// 200 : Successful, API is running fine and it is sending correct response
// 400 : Client side error
// 500 : Server side error

                    // ...to be continued




// Different type of responses that you can share

// 1>. text response 
// 2>. json response
// 3>. html response