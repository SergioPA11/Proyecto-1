module.exports = app => {
    const teachers = require("../controllers/teacher.controller.js");
    const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", teachers.create);
  
    // Retrieve all User
    router.get("/", auth.isAuthenticated, teachers.findAll);
    
    // Retrieve a single User with id
    router.get("/:id", auth.isAuthenticated, teachers.findOne);
  
    // Update a User with id
    router.put("/:id", auth.isAuthenticated, teachers.update);

    // Sign in
    router.post("/signin", auth.signin);
  
    // // Delete a User with id
    // router.delete("/:id", users.delete);
  
    // // Create a new User
    // router.delete("/", users.deleteAll);
  
    app.use('/api/teacher', router);
  };