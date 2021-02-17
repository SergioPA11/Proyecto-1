module.exports = app => {
    const districts = require("../controllers/district.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", districts.create);
  
    // Retrieve all Stats
    router.get("/", districts.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", districts.findOne);
  
    // Update a Stats with id
    router.put("/:id", districts.update);
  
    // Delete a Stats with id
    router.delete("/:id", districts.delete);
  
    // Delete all Stats
    router.delete("/", districts.deleteAll);
  
    app.use('/api/districts', router);
  };