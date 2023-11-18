const connection = require('../database/connection');

const getAllUsers = async () => {
    const [query] = await connection.execute(`SELECT * FROM users ORDER BY name ASC`);
    return query;
}
const lookForUserByEmail = async (name, email) => {

    const [query] = await connection.execute(`
        SELECT name, email FROM users WHERE name = ? or email = ?
    `, [name, email])
    return query;
}

const getUserById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM test.users WHERE id_user = ?`, [id]);
    return query;
}

const createUser = async (name, password, email) => {

    const [query] = await connection.execute(`INSERT INTO test.users (name, password, email) VALUES(?, ?, ?) `, [name, password, email]);
    return query;

}

const updateUser = async (name, password, email, id_user) => {

    const [query] = await connection.execute(`UPDATE users 
        SET name = ?, password = ?, email = ? WHERE id_user = ?`, [name, password, email, id_user]);

    return query;
}

const deleteUser = async (id_user) => {

    const [query] = await connection.execute(`DELETE FROM users WHERE id_user = ?`, [id_user]);
    return query;
}

// class USERS {

//     name;
//     password;

//     constructor(name, password) {
//         this.name = name;
//         this.password = password;
//     }

//     fetchAll() {
//         return connection.query('SELECT * FROM users', (err, rows, fields)=>{

//             if(!err){
//                 // console.log('usersFields: ',  fields);
//                 // console.log('userRows: ',  rows);
//                  return rows.values;
//             }else{
//                 console.log('error: consulta não efectuada!');
//             }
//         })
//     }
// }

module.exports = { getAllUsers, lookForUserByEmail, getUserById, createUser, updateUser, deleteUser };