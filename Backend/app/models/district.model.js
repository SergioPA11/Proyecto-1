module.exports = (sequelize, Sequelize) => {
    const District = sequelize.define("districts", {
        id_municipality: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        }
    }, { timestamps: false });

    District.associate = function (models) {
        District.hasOne(models.district_schools, {
            through: "district_schools",
            foreignKey: "id_district"
        });
    }

    return District;
};