module.exports = app => {
    const schools = require("../controllers/school.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", schools.create);
  
    // Retrieve all Stats
    router.get("/", schools.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", schools.findOne);
  
    // Update a Stats with id
    router.put("/:id", schools.update);
  
    // Delete a Stats with id
    router.delete("/:id", schools.delete);
  
    // Delete all Stats
    router.delete("/", schools.deleteAll);
  
    app.use('/api/schools', router);
  };