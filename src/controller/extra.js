const extraModel = require('../model/extra');

exports.price = async (req, res, next) => {

    const queryPrice = await extraModel.getAllPrice();

    res.status(200).render('includes/modal-service', {
        dataPrice: queryPrice
    });
}

exports.percentage = async (req, res, next) => {
    
    const queryPercentage = await extraModel.getAllPercentage();

    res.status(200).render('includes/modal-service', {
        dataPercentage: queryPercentage
    })
}
