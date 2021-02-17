module.exports = app => {
    const teacher_schools = require("../controllers/teacher_school.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", teacher_schools.create);
  
    // Retrieve all Stats
    router.get("/", teacher_schools.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", teacher_schools.findOne);
  
    // Update a Stats with id
    router.put("/:id", teacher_schools.update);
  
    // Delete a Stats with id
    router.delete("/:id", teacher_schools.delete);
  
    // Delete all Stats
    router.delete("/", teacher_schools.deleteAll);
  
    app.use('/api/teacher_schools', router);
  };