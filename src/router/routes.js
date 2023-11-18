const verifyJWT = require('../helpers/verifyJWT');
const validationError = require('../public/js/validation')
const authControllers = require('../controller/auth');
const controllers = require('../controller/controllers')
const adminControllers = require('../controller/admin');
const extraControllers = require('../controller/extra');
const express = require('express');
const router = express.Router();


const user = {
    nome: 'Jeorgel',
    idade: 27,
    ocupacao: false
}

// controllers toget home page
router.get('/', controllers.home)
// router to get a service 
router.get('/admin/services', verifyJWT, adminControllers.services);
// router to get prices
router.get('/admin/services', verifyJWT, extraControllers.price);
// router to get the percentages
router.get('/admin/services', verifyJWT, extraControllers.percentage);
// route to get users
router.get('/admin/users', verifyJWT, controllers.login)
// route to get a single user
router.get('/edituser/:id_user', verifyJWT, controllers.userById)
// route to create list of users
router.post('/create', controllers.create);
// route to create list of service
router.post('/createService', adminControllers.createService);
// route to getServiceById
router.get('/service/:id_service', controllers.details);
// router edit service
router.get('/admin/editService/:id_service', verifyJWT, adminControllers.getServiceById);
// router update
router.post('/admin/updateService/:id_service', adminControllers.updateService);
// router to delete service 
router.get('/admin/deleteService/:id_service', verifyJWT, adminControllers.deleteService);
// route to update a user
router.post('/update/:id_user', controllers.update);
// route to delete a user
router.get('/delete/:id_user', verifyJWT, controllers.delete);
// route to get a about page
router.get('/about', controllers.about);
// router to get services details
// router.get('/details', controllers.details);

// authorization
router.get('/login', authControllers.login);
router.post('/logged', validationError.loginValidation, authControllers.logged)
router.get('/signup', authControllers.signup);
router.post('/signued', validationError.signupValidation, authControllers.signed);
router.get('/logout', authControllers.signout);

// profile
router.get('/profile', verifyJWT, authControllers.profile);

module.exports = router;