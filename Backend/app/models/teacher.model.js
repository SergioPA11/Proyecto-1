module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teachers", {
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
    }, { timestamps: false });

    Teacher.associate = function (models) {
      Teacher.hasOne(models.teacher_schools, {
        through: "teacher_schools",
        foreignKey: "id_Teacher",
      });
    }
  
    return Teacher;
  };