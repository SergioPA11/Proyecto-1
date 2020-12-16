module.exports = app => {
    const student = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", student.create);
  
    // Retrieve all Stats
    router.get("/", student.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", student.findOne);
  
    // Update a Stats with id
    router.put("/:id", student.update);
  
    // Delete a Stats with id
    router.delete("/:id", student.delete);
  
    // Delete all Stats
    router.delete("/", student.deleteAll);
  
    app.use('/api/student', router);
  };
