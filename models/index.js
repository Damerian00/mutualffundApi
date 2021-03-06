const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize(
    {
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.Host,
    }
)

sequelize.authenticate()
.then(()=> {
    console.log("connected to Postgres DB")
})
.catch(e => {
    console.log(`Unable to connect to Postgres DB ${e}`)
})

const db = {};
db.sequelize = sequelize;

db.MutualFunds = require('./mfModel')(sequelize, DataTypes);
db.Investments = require('./investmentModel')(sequelize, DataTypes);

db.sequelize.sync({force: false}).then (()=> {
    console.log('DB synced with sequelize')
}).catch ((err)=> {
    console.log(`Error syncing the DB to sequelize ${err}`);
})


db.Investments.belongsTo(db.MutualFunds);
db.MutualFunds.hasOne(db.Investments);


module.exports = db;