const store = require('store');
const jwt = require('jsonwebtoken');


const verifyJWT = async (req, res, next) => {

    // const authHeader = req.headers['authorization'];
    // console.log("Headers: " + authHeader);
    // const token = authHeader && authHeader.split(' ')[1];
    const token = store.get('data');
    console.log(token);
    console.log("token: " + token);
    console.log(token);
    const secret = process.env.SECRET_SESSION;

    if (typeof token == 'undefined') {
        req.flash('error', 'Acesso negado!');
        return res.status(401).redirect('/');
        // return res.status(401).send({ message: "Acesso negado!" })
    }
    try {
        const decoded = await jwt.verify(token.token, secret);
        console.log(decoded.id);
        req.userId = decoded.id;
        store.set('userLoggedId',{id_user: req.userId})
        console.log("Autorização validada!")
        next();
    } catch (err) {
        req.flash('error', 'Sessão expirada!');
        store.clearAll('data');
        return res.status(401).redirect('/');
        //  return res.status(500).send({ message: "Token inválido!" })   
    }
}


module.exports = verifyJWT;