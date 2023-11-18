const store = require('store');
const bcrypt = require('bcrypt');
const userModel = require('../model/users');
const serviceModel = require('../model/services');
const extraModel = require('../model/extra');
const { ExpressValidator } = require('express-validator');

const saltRounds = 10;

responseData = {
    sucess: false,
    data: [],
    err: []
}

exports.home = async (req, res) => {

    const query = await serviceModel.getAllServices();

    const username = store.get('data');

    res.render('home',
        {
            data: query,
            title: 'SIGNegócios',
            path: '/home',
            titleBanner: 'SIGNegócios',
            paragraphBanner: 'O melhor para si e para o seu negócio, juntos somos a prosperidade',
            messageSuccess: req.flash('success'),
            messageError: req.flash('error'),
            userAccountName: username
        });

}

exports.login = async (req, res) => {


    const username = store.get('data');
    const query = await userModel.getAllUsers();
    res.status(200).render('admin/user',
        {
            messageSuccess: req.flash('success'),
            messageError: req.flash('error'),
            data: query,
            title: 'admin.Usuários',
            path: '/users',
            editing: false,
            titleBanner: 'Usuários',
            paragraphBanner: 'A nossa equipe, é o nosso forte',
            userAccountName: username
        });


    // return res.status(200).json(query);
}

exports.userById = async (req, res, next) => {

    const { id_user } = req.params;
    const query = await userModel.getUserById(id_user);

    try {
        if (query.length === 0) {
            return res.status(404).json({ message: 'No user found' })
        }
        res.status(200).render('admin/editing',
            {
                data: query,
                title: 'editing',
                path: '/users',
                editing: true,
                titleBanner: 'Usuários',
                paragraphBanner: 'A nossa equipe, é o nosso forte',
                messageSuccess: '',
                messageError: '',
                userAccountName: store.get('data')
            })
        // return res.status(200).json(query);
    } catch (err) {
        res.status(404).json({ message: 'Impossible to get a user' });
    }

}

exports.create = async (req, res, next) => {


    const hashPassword = bcrypt.hash(req.body.password, saltRounds);

    const name = req.body.name;
    const password = hashPassword;
    const email = req.body.email;

    const query = await userModel.lookForUserByEmail(name, email);

    console.log(query);
    if (query.length > 0) {
        if (query[0].email == email) {
            console.log(query[0].email == email)
            req.flash('error', `Este email: ${email}, já existe!`)
            res.redirect('/admin/users');
        } else {
            console.log(query[0].name == name)
            req.flash('error', `Este nome: ${name}, já existe!`)
            res.redirect('/admin/users');
        }
    } else {
        userModel.createUser(name, password, email).then(result => {
            // console.log(result);
            req.flash('success', 'Usuário cadastrado com sucesso. Obrigado!');
            res.redirect('/admin/users');
            // console.log("Usário carregado com sucesso: ", req.body);
            // res.status(200).json({ message: 'User saved successfully' });
        }).catch(err => {
            res.status(500).json({ message: err.message })
        })
    }


}


exports.update = async (req, res, next) => {

    try {

        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

        const id_user = req.params.id_user;
        const name = req.body.name;
        const password = hashPassword;
        const email = req.body.email;

        const query = await userModel.updateUser(name, password, email, id_user);

        if (req.body) {

            req.flash('success', 'Usuário actualizado com sucessso.')
            res.redirect('/admin/users');
        }
        // res.status(200).render('user', { data: query, editing: editMode })
        // res.status(200).json({ success: 'user updated successfully' });
    } catch (err) {
        res.status(404).json({ message: 'Error updating user' })
    }

}
exports.delete = async (req, res) => {

    try {

        const id_user = req.params.id_user;
        const query = await userModel.deleteUser(id_user);

        if (req.body) {
            req.flash('success', 'Usuário foi apagado com sucesso.')
            res.redirect('/admin/users');
        }
        // res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(404).json({ message: 'Error deleting user' });
    }
}
exports.about = async (req, res) => {
    const username = store.get('data');
    res.status(200).render('about',
        {
            path: '/about',
            title: 'sobre',
            titleBanner: 'Sobre',
            paragraphBanner: 'O Sistema Integrado de Gestão de Negócios',
            messageSuccess: '',
            messageError: '',
            userAccountName: username
        })
}

exports.details = async (req, res, next) => {

    const id_service = req.params.id_service;
    const [query] = await serviceModel.getServiceById(id_service);

    res.status(200).render('details',
        {
            service: query,
            path: '/details',
            title: query.title,
            titleBanner: query.title,
            paragraphBanner: 'Mais detalhes sobre o serviço em questão',
            messageSuccess: '',
            messageError: '',
            userAccountName: store.get('data')
        }
    );
}

