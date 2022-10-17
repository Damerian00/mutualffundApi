const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');
let sequelize = null;

if (process && process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
            }
          }
        }
    );
} else {
   sequelize = new Sequelize(
    { // use imported configurations from dbConfig
        // database: dbConfig.DB,
        // username: dbConfig.USER,
        // password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
                }
              },
        host: dbConfig.Host,
    })
}
// const sequelize = new Sequelize(
//     {
//         database: dbConfig.DB,
//         username: dbConfig.USER,
//         password: dbConfig.PASSWORD,
//         dialect: dbConfig.dialect,
//         host: dbConfig.Host,
//     }
// )

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

db.sequelize.sync().then (()=> {
    console.log('DB synced with sequelize')
}).catch ((err)=> {
    console.log(`Error syncing the DB to sequelize ${err}`);
})


db.Investments.belongsTo(db.MutualFunds);
db.MutualFunds.hasMany(db.Investments);


module.exports = db;