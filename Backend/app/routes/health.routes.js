module.exports = app => {
    const healths = require("../controllers/health.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", healths.create);
  
    // Retrieve all Stats
    router.get("/", healths.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", healths.findOne);
  
    // Update a Stats with id
    router.put("/:id", healths.update);
  
    // Delete a Stats with id
    router.delete("/:id", healths.delete);
  
    // Delete all Stats
    router.delete("/", healths.deleteAll);
  
    app.use('/api/healths', router);
  };
