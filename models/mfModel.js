const  Sequelize = require("sequelize");


module.exports = (sequelize,DataTypes) => {
    const MutualFund = sequelize.define("MutualFund", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fund_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stocks: {
            type:Sequelize.ARRAY(Sequelize.STRING)
        },
        cds : {
            type: Sequelize.ARRAY(Sequelize.STRING)
        }
      

    })
    return MutualFund;
}