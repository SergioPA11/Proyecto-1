const db = require("../models");
const Teacher_School = db.teacher_schools;
const Op = db.Sequelize.Op;

// Create and Save a new Stats
// req --> request (contains the body)
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_Teacher || !req.body.id_School ) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Stats
  const teacher_schools = {
    id_Teacher: req.body.id_Teacher,
    id_School: req.body.id_School
  };

  // Save Stats in the database
  Teacher_School.create(teacher_schools)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stats."
      });
    });
};

// Retrieve all Stats from the database.
exports.findAll = (req, res) => {
  
    Teacher_School.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Stats."
        });
      });
};

// Find a single Stats with an id
exports.findOne = (req, res) => {
  let id = req.params.id;
  Teacher_School.findByPk(id)
    .then(data => {
      console.log("Estos son los datos")
      console.log(data);
      if(!data){
        res.status(400).send({
          message:
            "No Stats found with that id"
        })
      }
      res.send(data);
      return;
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stats with id"
      });
      return;
    });
};

// Update a Stats by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Teacher_School.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stats was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stats with id=${id}. Maybe Stats was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Stats with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Teacher_School.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stats was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Stats with id=${id}. Maybe Stats was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Stats with id=" + id
      });
    });
};

// Delete all Stats from the database.
exports.deleteAll = (req, res) => {
    Teacher_School.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Stats were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Stats."
      });
    });
};