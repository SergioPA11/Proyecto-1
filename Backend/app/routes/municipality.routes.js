module.exports = app => {
    const municipalities = require("../controllers/municipality.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", municipalities.create);
  
    // Retrieve all Stats
    router.get("/", municipalities.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", municipalities.findOne);
  
    // Update a Stats with id
    router.put("/:id", municipalities.update);
  
    // Delete a Stats with id
    router.delete("/:id", municipalities.delete);
  
    // Delete all Stats
    router.delete("/", municipalities.deleteAll);
  
    app.use('/api/municipalities', router);
  };