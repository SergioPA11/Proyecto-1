module.exports = (sequelize, Sequelize) => {
    const Health = sequelize.define("health", {
      dni: {
        type: Sequelize.STRING
      },
      altura: {
        type: Sequelize.FLOAT
      },
      peso: {
        type: Sequelize.FLOAT
      },
      municipio: {
        type: Sequelize.STRING
      },
      centro: {
        type: Sequelize.STRING
      }
    }, { timestamps: false});
  
    // Health.associate = function(models) {
    //     Health.belongsTo(models.user, {
    //       onDelete: "CASCADE",
    //       foreignKey: "userId",
    //       as: "users",
    //     })
    //   }

    return Health;
  };