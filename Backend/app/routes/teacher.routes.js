module.exports = app => {
    const teacher = require("../controllers/teacher.controller.js");
    const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", teacher.create);
  
    // Retrieve all User
    router.get("/", auth.isAuthenticated, teacher.findAll);
    
    // Retrieve a single User with id
    router.get("/:id", auth.isAuthenticated, teacher.findOne);
  
    // Update a User with id
    router.put("/:id", auth.isAuthenticated, teacher.update);

    // Sign in
    router.post("/signin", auth.signin);
  
    // // Delete a User with id
    // router.delete("/:id", users.delete);
  
    // // Create a new User
    // router.delete("/", users.deleteAll);
  
    app.use('/api/teacher', router);
  };