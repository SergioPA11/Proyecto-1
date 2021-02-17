module.exports = (sequelize, Sequelize) => {
    const Teacher_School = sequelize.define("teacher_schools", {
        id_Teacher: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_School: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    }, { timestamps: false });

    return Teacher_School;
};