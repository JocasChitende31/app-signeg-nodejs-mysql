const connection = require('../database/connection');

const login = async (password, email) => {
    const [query] = await connection.execute(
        `SELECT * FROM users WHERE password = ? OR email = ? `, [password, email]
    )
    return query;
}

module.exports = { login };