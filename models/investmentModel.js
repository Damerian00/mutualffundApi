

module.exports = (sequelize, DataTypes) => {
    const Investment = sequelize.define("Investment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        investAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            
        },
        percentage: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        return: {
          type: DataTypes.FLOAT,
          allowNull: false
        }
    })
    return Investment;
}