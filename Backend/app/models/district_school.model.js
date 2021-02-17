module.exports = (sequelize, Sequelize) => {
    const District_School = sequelize.define("district_schools", {
        id_district: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_school: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    }, { timestamps: false });

    return District_School;
};