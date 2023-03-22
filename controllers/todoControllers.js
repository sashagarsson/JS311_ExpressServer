const db = require('../path-to-the-data-file')

const postToDo = (req, res) => {
    console.log("POST/todos/")
let newItem = {};
newItem.id = getRandomInt();
newItem.description = req.body.description;
newItem.completed = false;

// put it in the database
db.push(newItem);

// return the newItem on the response
res.json(newItem)
}

const getAllTodos = (req, res) => {
    console.log("GET /todos");
    res.json(database)

}

const getTodoByID = (req, res) => {
        console.log("GET /todos/:id");

    let myId = req.params.id;

    let matchingItem = db.find(  (item, index) => {
        return item.id == myId
    })
    if(matchingItem){
          res.json(matchingItem);
  
    } else {
        res.send("Please enter an existing ID")
    }

}

const deleteTodo = (req, res) => {
        console.log("DELETE /todos/:id");
    let myId = req.params.id;

    // findIndex of the item the item's id = myId and splice it

    let matchingIndex = db.findIndex((item, index) => {
        return item.id == myId;
    })

    let deletedItem = db.splice(matchingIndex, 1);

    if(matchingIndex){
    res.json(deletedItem) 
    } else {
        res.send("No matching ID. No record deleted")
    }

}

const updateTodsByID = (req, res) => {
  console.log("PUT /todos/:id");
  
  let value = req.params.id
  //find the item that matches the id
  let matchingID = db.find((item) => {return item.id == value})

  //to update the description, get the req.body.description
  //to update the completed, get the req.body.completed
  let description = req.body.description
  let completed = req.body.completed

  //if you found it, put the completed var into matchingID.completed
  if(matchingID){
      if(description && completed){
          matchingID.description = description
          matchingID.completed = completed

          res.json(matchingID)
       }
      else if(description){
          matchingID.description = description
          res.json(matchingID)
      }

  }  else {
    res.send("Please enter a valid ID")
}
}

module.exports = {postTodo, getAllTodos, getTodoByID, deleteTodo,updateTodsByID }