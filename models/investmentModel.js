

module.exports = (sequelize, DataTypes) => {
    const Investment = sequelize.define("Investment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        investAmount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        percentage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        return: {
          type: DataTypes.FLOAT,
          allowNull: false
        }
    })
    return Investment;
}