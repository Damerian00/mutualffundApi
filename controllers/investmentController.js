const db = require('../models/index');

const Investment = db.Investments;

const addInvestment = async (req, res) => {
    try {
        
        let input_data ={
            investAmount: req.body.investAmount,
            percentage: req.body.percentage,
            return: req.body.return,
            MutualFundId: req.body.MutualFundId
        }
       const invest = await Investment.create(input_data)
       res.status(200).send(invest);
    } catch (err) {
        res.status(400).send(err);
    }
}

const getAllInvestments = async (req, res) => {
    try {
       let invests = await Investment.findAll({})
       res.status(200).send(invests)
       
   } catch (err) {
    res.status(400).send(err);
   }
}

const getOneInvestment = async (req, res) => {
    try {
    let id = req.params.id;
    let invest = await Investment.findOne(
        { where: {id: id}}
        )
        res.status(200).send(invest);
    
} catch (err) {
    res.status(400).send(err);
}

}

const updateInvestment = async (req,res) => {
    try {
    let input_data ={
        investAmount: req.body.investAmount,
        percentage: req.body.percentage,
        return: req.body.return,
        MutualFundId: req.body.MutualFundId
    }
   let invest = await Investment.update(input_data, {
        where: { id: req.params.id }
    })
    res.status(200).send(invest);
    
} catch (err) {
    res.status(400).send(err);
}

    }

    const deleteInvestment = async (req,res) => {
        try {
            let id = req.params.id;
              await Investment.destroy({
                  where: {
                      id: req.params.id
                  } 
              })
              res.status(200).send(`Investment with id: ${id} is deleted`)
           
        } catch (err) {
            res.status(400).send(err);
        }
    }

    module.exports = {
        addInvestment,
        getAllInvestments,
        getOneInvestment,
        updateInvestment,
        deleteInvestment

    }