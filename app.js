
// bring in express framework
let express = require("express");

// define the port
let PORT = 8080;

// create application server object
let app = express();

// make sure all the data passing back and forth is in json format
// using a middleware component
app.use(express.json());

//let app know where the public stuff is
app.use(express.static('public'));

const toDos = require("./routes/router");

app.use(toDos)

//more verbose
let bodyParser = express.json()
app.use(bodyParser);

let db = []; // this is just for testing. We don't really do this.

app.get("/todos",(req, res) => {
    // console.log("GET /todos");
    // res.json(db);
 })


app.get("/todos/:id",(req, res) => {
    // console.log("GET /todos/:id");

    // let myId = req.params.id;

    // let matchingItem = db.find(  (item, index) => {
    //     return item.id == myId
    // })
    // if(matchingItem){
    //       res.json(matchingItem);
  
    // } else {
    //     res.send("Please enter an existing ID")
    // }
    
 })


 app.delete("/todos/:id",(req, res) => {
    // console.log("DELETE /todos/:id");
    // let myId = req.params.id;

    // // findIndex of the item the item's id = myId and splice it

    // let matchingIndex = db.findIndex((item, index) => {
    //     return item.id == myId;
    // })

    // let deletedItem = db.splice(matchingIndex, 1);

    // if(matchingIndex){
    // res.json(deletedItem) 
    // } else {
    //     res.send("No matching ID. No record deleted")
    // }
    
 })




// app.post("/todos",(req, res) => { 
//     console.log("POST /todos");

//     let newItem = {};
//     newItem.id = getRandomInt();
//     newItem.description = req.body.description;
//     newItem.completed = false;
    
//     // put it in the database
//     db.push(newItem);

//     // return the newItem on the response
//     res.json(newItem)


//  })

 app.put("/todos/:id",(req, res) => { 
//     console.log("PUT /todos/:id");
  
//   let value = req.params.id
//   //find the item that matches the id
//   let matchingID = db.find((item) => {return item.id == value})

//   //to update the description, get the req.body.description
//   //to update the completed, get the req.body.completed
//   let description = req.body.description
//   let completed = req.body.completed

//   //if you found it, put the completed var into matchingID.completed
//   if(matchingID){
//       if(description && completed){
//           matchingID.description = description
//           matchingID.completed = completed

//           res.json(matchingID)
//        }
//       else if(description){
//           matchingID.description = description
//           res.json(matchingID)
//       }

//   }  else {
//     res.send("Please enter a valid ID")
// }

})


 

// function that returns a random integer
const getRandomInt = () => {
//     let randomFloat = Math.random();
//     let bigRandomFloat = randomFloat * 100000;
//     let randomInt = Math.floor(bigRandomFloat);
    
//     return randomInt;
// }


app.listen(PORT, () => {console.log("Application is listening on port", PORT)})
}