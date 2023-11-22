const { check } = require('express-validator');

exports.signupValidation = [
    check('name', 'Nome é obrigatório!').not().isEmpty().not().isUppercase({min:2}).not().isLowercase().escape(),
    check('email', 'Email inválido!').isEmail().normalizeEmail({ gmail_remove_dots: true }).escape(),
    check('password', 'Precisa definir uma palavra-passe!').not().isEmpty().escape(),
    check('password', 'Passe insegura, deve ter 6 / mais caracteres!').isLength({ min: 6 }).escape(),
    check('password', 'Palavra-passe inválida').not().isAlphanumeric().not().isUppercase().not().isLowercase().escape()
];
exports.loginValidation = [
    check('email', 'Por favor, intruza o email correcto').isEmail().normalizeEmail({ gmail_remove_dots: true }).escape(),
    check('password', 'Preencha este campo.').not().isEmpty().escape()
];

