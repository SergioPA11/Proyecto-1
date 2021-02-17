module.exports = (sequelize, Sequelize) => {
    const Municipality = sequelize.define("municipalities", {
        name: {
            type: Sequelize.STRING
        }
    }, { timestamps: false });

    Municipality.associate = function (models) {
        Municipality.hasOne(models.districts, {
            through: "districts",
            foreignKey: "id_municipality"
        });
    }

    return Municipality;
};