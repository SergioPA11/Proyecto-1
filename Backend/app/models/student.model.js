module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      vesicular_mass: {
        type: Sequelize.STRING
      },
      fat_mass: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      }
    }, { timestamps: false});

    return Student;
  };