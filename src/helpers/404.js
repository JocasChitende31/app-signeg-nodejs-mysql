const controller = require('../controller/error');
const express = require('express');

const router = express.Router();

router.use(controller.get404);

module.exports = router;