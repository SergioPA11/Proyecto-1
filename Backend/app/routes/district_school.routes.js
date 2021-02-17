module.exports = app => {
    const district_schools = require("../controllers/district_school.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", district_schools.create);
  
    // Retrieve all Stats
    router.get("/", district_schools.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", district_schools.findOne);
  
    // Update a Stats with id
    router.put("/:id", district_schools.update);
  
    // Delete a Stats with id
    router.delete("/:id", district_schools.delete);
  
    // Delete all Stats
    router.delete("/", district_schools.deleteAll);
  
    app.use('/api/district_schools', router);
  };