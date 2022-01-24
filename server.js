const cors = require('cors');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mfRouters = require('./routes/mfRouter.js')
app.use('/mutualfunds', mfRouters);

const investRouters = require('./routes/investRouter.js')
app.use('/investments', investRouters);



    app.listen(PORT, ()=>{
        console.log(`Listening on http://localhost:${PORT}`);

});