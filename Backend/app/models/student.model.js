module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("students", {
    studentId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    courseId: {
      type: Sequelize.STRING
    },
    id_School: {
      type: Sequelize.INTEGER
    },
    year: {
      type: Sequelize.INTEGER
    },
    metabolic_age: {
      type: Sequelize.FLOAT
    },
    average_of_fat: {
      type: Sequelize.FLOAT
    },
    average_of_Hydration: {
      type: Sequelize.FLOAT
    },
    muscle_weight: {
      type: Sequelize.FLOAT
    },
    muscle_mass_level: {
      type: Sequelize.FLOAT
    },
    bone_weight: {
      type: Sequelize.FLOAT
    },
    kilocalories: {
      type: Sequelize.FLOAT
    },
    sex: {
      type: Sequelize.STRING
    },
    registration_date: {
      type: Sequelize.DATE,
      //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    BMI: {
      type: Sequelize.FLOAT
    },
    weight: {
      type: Sequelize.FLOAT
    },
    height: {
      type: Sequelize.FLOAT
    },
    abdominal_perimeter: {
      type: Sequelize.FLOAT
    },
    physical_activity_level: {
      type: Sequelize.INTEGER
    },
  }, { timestamps: false });

  return Student;
};