module.exports = (sequelize, Sequelize) => {
  const School = sequelize.define("schools", {
    name: {
      type: Sequelize.STRING
    },
    street: {
      type: Sequelize.STRING
    },
    group_class: {
      type: Sequelize.STRING
    },
    municipality: {
      type: Sequelize.STRING
    }
  }, { timestamps: false });

  // School.associate = function (models) {
  //   School.belongsToMany(models.schools, {
  //     through: "teacherSchool",
  //     foreignKey: "id_School",
  //     as: "school"
  //   });
  // }

  // School.associate = function (models) {
  //   School.hasMany(models.students, {
  //     foreignKey: "id_School",
  //     as: "school"
  //   });
  // }

  return School;
};