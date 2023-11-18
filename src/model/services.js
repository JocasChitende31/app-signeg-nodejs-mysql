const connection = require('../database/connection');

const getAllServices = async () => {

    const [query] = await connection.execute(
        `SELECT * FROM services 
        INNER JOIN servicePrice ON services.id_fk_price = servicePrice.id_price
        INNER JOIN percentageServiceOff ON services.id_fk_perc_serv = percentageServiceOff.id_perc_off 
        ORDER BY title ASC`
    );

    return query;
}

const getServiceById = async (id) => {

    const [query] = await connection.execute(`SELECT * FROM services  
    INNER JOIN servicePrice ON services.id_fk_price = servicePrice.id_price
        INNER JOIN percentageServiceOff ON services.id_fk_perc_serv = percentageServiceOff.id_perc_off
        WHERE id_service = ?`, [id]);
    return query;
}

const postService = async (id_fk_price, id_fk_perc_serv, title, description) => {

    const { query } = await connection.execute(
        `INSERT INTO test.services (id_fk_price, id_fk_perc_serv, title, description) VALUES(?, ?, ?, ?)`, [id_fk_price, id_fk_perc_serv, title, description]
    )

    return query;
}

const updateService = async (id_fk_price, id_fk_perc_serv, title, description, id_service) => {

    const [query] = await connection.execute(`
        UPDATE services SET id_fk_price = ?, id_fk_perc_serv = ?, title = ?, description = ? 
        WHERE id_service = ?
    `, [id_fk_price, id_fk_perc_serv, title, description, id_service]);

    return query;
}
const deleteService = async (id_service) => {

    const [query] = await connection.execute(`
                DELETE FROM services WHERE id_service = ?
        `, [id_service]);
    return query;
}
module.exports = { getAllServices, postService, getServiceById, updateService, deleteService };