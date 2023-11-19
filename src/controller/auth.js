const store = require('store');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const userModel = require('../model/users');
const userLoginModel = require('../model/auth')
const jwt = require('jsonwebtoken');

const saltRounds = 10;

exports.login = async (req, res, next) => {

    res.status(200).render('auth/login', {
        title: 'Acessar sua conta',
        messageSuccess: req.flash('success'),
        messageErr: validationResult(req),
    });
}
exports.logged = async (req, res, next) => {
    const emailLogin = req.body.email;
    const passwordLogin = req.body.password;
    const erros = await validationResult(req);
    if (!erros.isEmpty()) {
        res.status(500).json(erros);
    } else {
        console.log(req.body);
        userLoginModel.login(passwordLogin, emailLogin)
            .then(result => {
                if (result.length > 0) {
                    bcrypt.compare(passwordLogin, result[0].password)
                        .then(password => {
                            if ((result[0].email === emailLogin && password)) {
                                const id = result[0].id_user;
                                console.log(id);
                                var token = jwt.sign({ id }, process.env.SECRET_SESSION, {
                                    expiresIn: '1800s'
                                });
                                console.log(token);
                                const nameUserLogged = result[0].name;
                                store.set('data', {
                                    token: token,
                                    usernameLogged: nameUserLogged
                                })
                                // console.log('store token 1 ' + store.get('data').token);
                                // console.log('store token 1 ' + store.get('data').usernameLogged);
                                req.flash("success", "Boas Vindas, " + nameUserLogged.split(" ")[0])
                                res.setHeader('Authorization', `Bearer ${token}`).redirect('/');
                                // res.redirect('/');
                                // next();
                            } else {
                                req.flash("success", "Por favor, verifique seu email ou palavra-passe.")
                                console.log("Email ou Palavra-passe incorrecto");
                                res.redirect('/login');
                            }
                        })
                        .catch(err => {
                            res.status(500).json({ message: err.message });
                        })
                } else {
                    req.flash("success", "Conta inexistente. Por favor, faça o cadastro!")
                    console.log("Palavra-passe incorrecta");
                    res.redirect('/login');
                }
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            })
    }
}
exports.signup = async (req, res, next) => {

    res.status(200).render('auth/signup', {
        title: 'Cadastrar-se',
        messageSuccess: req.flash('success'),
        messageError: req.flash('error'),
    })
}
exports.signed = async (req, res, next) => {

    const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
    const name = req.body.name;
    const email = req.body.email;
    const password = hashPassword;

    const erros = validationResult(req);
    const query = await userModel.lookForUserByEmail(name, email);
    console.log(query);
    if (query.length > 0) {
        if (query[0].email == email) {
            console.log(query[0].email == email)
            req.flash('error', `Duplicidade! Este email já existe no sistema.`)
            res.redirect('/signup');
        } else {
            console.log(query[0].name == name)
            req.flash('error', `Duplicidade! Este nome já existe no sistema.`);
            res.redirect('/signup');
        }
    } else {
        userModel.createUser(name, password, email)
            .then(result => {
                if (!erros.isEmpty()) {
                    res.json(erros);
                } else {
                    req.flash('success', 'Cadastro efectuado com sucesso. Obrigado!');
                    res.status(200).redirect('/signup');
                }

            }).catch(err => {
                res.status(500).json({ message: err.message });
            })
    }
}
exports.signout = async (req, res, next) => {

    store.clearAll('data');
    req.flash('success', 'Terminou sua sessão!')
    res.redirect('/')
}

exports.profile = async (req, res, next) => {
    try {
        const id = req.userId;
        const userLoggedProfile = await userModel.getUserById(id);
        res.status(200).render('admin/profile',
            {
                title: userLoggedProfile[0].name,
                profile: userLoggedProfile
            })
    } catch (err) {
        return res.status(200).json({ message: 'Informações indisponível' })
    }

}