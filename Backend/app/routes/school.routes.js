module.exports = app => {
    const school = require("../controllers/school.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Stats
    router.post("/", school.create);
  
    // Retrieve all Stats
    router.get("/", school.findAll);
  
    // Retrieve a single Stats with id
    router.get("/:id", school.findOne);
  
    // Update a Stats with id
    router.put("/:id", school.update);
  
    // Delete a Stats with id
    router.delete("/:id", school.delete);
  
    // Delete all Stats
    router.delete("/", school.deleteAll);
  
    app.use('/api/school', router);
  };