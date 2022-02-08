const db = require('../models/index');

const MutualFund = db.MutualFunds;

const addMF = async (req, res) => {
    let input_data ={
        fund_name: req.body.fund_name,
        stocks: req.body.stocks,
        cds: req.body.cds,
        
    }
  let MF = await MutualFund.create(input_data)
  res.status(200).send(MF)
}

const getAllMFs = async (req, res) => {
   let MFs = await MutualFund.findAll({
    include : db.Investments
    }
    )
    res.status(200).send(MFs)
}

const getOneMF = async (req, res) => {
    let id = req.params.id;
  let MF = await MutualFund.findOne(
        { where: {id: id},include : db.Investments}
        )
        res.status(200).send(MF)
}

const updateMF = async (req,res) => {
    let input_data ={
        fund_name: req.body.fund_name,
        stocks: req.body.stocks,
        cds: req.body.cds,
        
    }
   const MF = await MutualFund.update(input_data, {
        where: { id: req.params.id }
    })
    res.status(200).send(MF)
    }

    const deleteMF = async (req,res) => {
        let id =req.params.id;
        await MutualFund.destroy({
            where: {
                id: req.params.id
            } 
        })
        res.status(200).JSON(`Mutual Fund with id: ${id} is deleted`)
    }

    module.exports = {
        addMF,
        getAllMFs,
        getOneMF,
        updateMF,
        deleteMF

    }