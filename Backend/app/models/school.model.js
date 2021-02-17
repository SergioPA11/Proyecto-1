module.exports = (sequelize, Sequelize) => {
  const School = sequelize.define("schools", {
    name: {
      type: Sequelize.STRING
    },
    direction: {
      type: Sequelize.STRING
    }
  }, { timestamps: false });


  School.associate = function (models) {
    School.hasOne(models.district_schools, {
      through: "district_schools",
      foreignKey: "id_school"
    });
  }

  School.associate = function (models) {
    School.hasOne(models.teacher_schools, {
      through: "teacher_schools",
      foreignKey: "id_School",
    });
  }

  School.associate = function (models) {
    School.hasOne(models.courses, {
      through: "courses",
      foreignKey: "id_School",
    });
  }

  School.associate = function (models) {
    School.hasOne(models.students, {
      through: "student",
      foreignKey: "id_School",
    });
  }

  // School.associate = function (models) {
  //   School.hasMany(models.students, {
  //     foreignKey: "id_School",
  //     as: "school"
  //   });
  // }

  return School;
};