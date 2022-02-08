const db = require('../models/index');

const MutualFund = db.MutualFunds;

const addMF = async (req, res) => {
    try {
      let input_data ={
          fund_name: req.body.fund_name,
          stocks: req.body.stocks,
          cds: req.body.cds,
          
      }
    let MF = await MutualFund.create(input_data)
    res.status(200).send(MF)
     
  } catch (err) {
    res.status(400).send(err);
  }
}

const getAllMFs = async (req, res) => {
    try {
        let MFs = await MutualFund.findAll({
         include : db.Investments
         }
         )
         res.status(200).send(MFs)
     
    } catch (err) {
        res.status(400).send(err);
    }
}

const getOneMF = async (req, res) => {
    try {
            let id = req.params.id;
          let MF = await MutualFund.findOne(
                { where: {id: id},include : db.Investments}
                )
                res.status(200).send(MF)
     
        } catch (err) {
            res.status(400).send(err);  
        }
}

const updateMF = async (req,res) => {
    try {
        let input_data ={
            fund_name: req.body.fund_name,
            stocks: req.body.stocks,
            cds: req.body.cds,
            
        }
       const MF = await MutualFund.update(input_data, {
            where: { id: req.params.id }
        })
        res.status(200).send(MF)
     
    } catch (err) {
        res.status(400).send(err);
    }
    }

    const deleteMF = async (req,res) => {
        try {
            let id =req.params.id;
            await MutualFund.destroy({
                where: {
                    id: req.params.id
                } 
            })
            res.status(200).send(`Mutual Fund with id: ${id} is deleted`)
     
        } catch (err) {
            res.status(400).send(err); 
        }
    }

    module.exports = {
        addMF,
        getAllMFs,
        getOneMF,
        updateMF,
        deleteMF

    }