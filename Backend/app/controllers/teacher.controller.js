const db = require("../models");
const Teacher = db.teacher;
const Op = db.Sequelize.Op;
const utils = require("../../utils");
const  bcrypt  =  require('bcryptjs');

// Create and Save a new User
exports.create = (req, res) => {
  //Validate request
  if (!req.body.password || !req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  let teacher = {
    password: req.body.password,
    name: req.body.name,
    username: req.body.username
    //isAdmin: req.body.isAdmin ? req.body.isAdmin : false
  };

  Teacher.findOne({ where: { username: teacher.username } })
    .then(data => {
      if (data) {
        const result = bcrypt.compareSync(teacher.password, data.password);
        if (!result) return res.status(401).send('Password not valid!');
        const token = utils.generateToken(data);
        // get basic user details
        const  teacherObj = utils.getCleanUser(data);
        // return the token along with user details
        return res.json({ teacher:  teacherObj, access_token: token });
      }

      teacher.password = bcrypt.hashSync(req.body.password);

      // User not found. Save new User in the database
      Teacher.create(teacher)
        .then(data => {
          const token = utils.generateToken(data);
          // get basic user details
          const teacherObj = utils.getCleanUser(data);
          // return the token along with user details
          return res.json({ teacher: teacherObj, access_token: token });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

  Teacher.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Teacher.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Teacher.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// // Delete a User with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   User.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "User was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete User with id=${id}. Maybe User was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete User with id=" + id
//       });
//     });
// };

// // Delete all Users from the database.
// exports.deleteAll = (req, res) => {
//   User.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     });
// };

// Find user by username and password
exports.findTeacherByUsernameAndPassword = (req, res) => {
  const teacher = req.body.username;
  const pwd = req.body.password;

  Teacher.findOne({ where: { username: teacher, password: pwd } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
