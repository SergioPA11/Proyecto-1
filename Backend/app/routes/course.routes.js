module.exports = app => {
    const courses = require("../controllers/course.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", courses.create);
  
    // Retrieve all Stats
    router.get("/", courses.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", courses.findOne);
  
    // Update a Stats with id
    router.put("/:id", courses.update);
  
    // Delete a Stats with id
    router.delete("/:id", courses.delete);
  
    // Delete all Stats
    router.delete("/", courses.deleteAll);
  
    app.use('/api/courses', router);
  };