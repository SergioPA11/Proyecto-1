module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      // isAdmin: {
      //   type: Sequelize.BOOLEAN
      // }
    });

    // Teacher.associate = function(models) {
    //   Teacher.belongsToMany(models.teachers, {
    //       through: "teacherSchool",
    //       foreignKey: "id_Teacher",
    //       as: "teacher"
    //     });
    // }
  
    return Teacher;
  };