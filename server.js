const express = require('express');
const app = express();
const db = require('./models/index.js');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mfRouters = require('./routes/mfRouter.js')
app.use('/mutualfunds', mfRouters);

const investRouters = require('./routes/investRouter.js')
app.use('/investments', investRouters);



    app.listen(PORT, ()=>{
        console.log(`Listening on http://localhost:${PORT}`);

});