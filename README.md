# JS311_ExpressServer

Build a todo backend

Support the following:

    - route that returns all the todos in our list
        - GET /todos
        - return an array of todo objects

    - route that returns a single todo based on the id provided
        - GET /todos/:id
            :id is the id of the todo to return if it exists
            otherwise, return null or a message("id not found")

    - route that will delete a single todo based on the id provided
        -DELETE/ todos/:id
            :id is the id of the todo that was deleted
            return message with the item that was deleted

    - route that adds a single todo to the list
        -POST /todos
            body should include an object that has at least a description
            we'll make a function that generates a random id that's added when the new todo is created
            ex: body: {"description": "feed the dog" ,
                        "completed" : false}

    - route that updates an existing todo based on the id provided
        -PUT /todos/:id
            ex: /todos/10, body={"description": "buy groceries", "completed": true}

Notes:
using: GET, POST, PUT, DELETE
POST and PUT use the body

    todo objects should have:
        - id : id of the todo item
        - description : what the todo is
        - completed : true or false

---

How to generate a random id:

    - math.random()  // generates a random number between 0 and 1
