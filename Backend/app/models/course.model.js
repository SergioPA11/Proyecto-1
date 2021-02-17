module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("courses", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        id_School: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false });

    Course.associate = function (models) {
        Course.hasOne(models.students, {
            through: "students",
            foreignKey: "courseId"
        });
    }

    return Course;
};