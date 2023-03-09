// check 

console.log("hello")

//bringing in the functions provided by the express
const express = require('express');

// create an application object using express
let app = express();
// define the port we'll communicate through
let PORT = 8080;
// for testing on our computer, domain name is localhost:8080
// the route is hello

// for any request where the route is "/hello"
//send this string as the response 
app.get("/hello",(req, res) => {
    res.send("hello from the hello route")
 })

 // write a GET route definition that will let me 'get' by using a name
// request /hello/Sasha
// request /hello/David
 app.get("/hello/:name" , (req,res) => {
    let value = req.params.name;
    // either way works
    let message = "hello" + value;
    let msg2 = `hello ${value}`
   
    // can use any of the following ways
    // res.send(`hello ${value}`)
    res.send(msg2)
 })

 // write a GET route deinition that will do this:

 // request url contains '/bye?name=mike'  --> "see ya later mike"
 app.get("/bye",(req, res) => {
    let name = req.query.name;
    if (name) {
         let message = `See ya later ${name}`
         res.send(message)
    }
    else {
        res.send("See ya later")
    }
})
    
app.listen(PORT, () => {console.log('Application is listening on port', PORT)})