module.exports = app => {
    const students = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", students.create);
  
    // Retrieve all Stats
    router.get("/", students.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", students.findOne);
  
    // Update a Stats with id
    router.put("/:id", students.update);
  
    // Delete a Stats with id
    router.delete("/:id", students.delete);
  
    // Delete all Stats
    router.delete("/", students.deleteAll);
  
    app.use('/api/students', router);
  };
