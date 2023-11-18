const connection = require('../database/connection');

// Price model
const getAllPrice = async (req, res, next) => {

    const [query] = await connection.execute(`
        SELECT * FROM servicePrice
    `);
    return query;
}



// Percentage model 
const getAllPercentage = async (req, res, next) => {

    const [query] = await connection.execute(`
        
        SELECT * FROM percentageServiceOff
        ` );
    return query;
}

module.exports = {
    // price
    getAllPrice,
    // percentage
    getAllPercentage
}