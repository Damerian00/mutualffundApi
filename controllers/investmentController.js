const db = require('../models/index');

const Investment = db.Investments;

const addInvestment = async (req, res) => {
    let input_data ={
        investAmount: req.body.investAmount,
        percentage: req.body.percentage,
        return: req.body.return,
        MutualFundId: req.body.MutualFundId
    }
   const invest = await Investment.create(input_data)
   res.status(200).send(invest);
}

const getAllInvestments = async (req, res) => {
   let invests = await Investment.findAll({})
   res.status(200).send(invests)
}

const getOneInvestment = async (req, res) => {
    let id = req.params.id;
    let invest = await Investment.findOne(
        { where: {id: id}}
        )
        res.status(200).send(invest);
}

const updateInvestment = async (req,res) => {
    let input_data ={
        investAmount: req.body.investAmount,
        percentage: req.body.percentage,
        return: req.body.return,
        MutualFundId: req.body.MutualFundId
    }
   let invest = await Investment.update(input_data, {
        where: { id: req.params.id }
    })
    res.status(200).send(invest)
    }

    const deleteInvestment = async (req,res) => {
      let id = req.params.id;
        await Investment.destroy({
            where: {
                id: req.params.id
            } 
        })
        res.status(200).send(`Investment with id: ${id} is deleted`)
    }

    module.exports = {
        addInvestment,
        getAllInvestments,
        getOneInvestment,
        updateInvestment,
        deleteInvestment

    }