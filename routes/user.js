const express = require('express');

let router = express.Router();

const controller = require('../controllers/user');

const validate = require('../controllers/authentication').validate;
const isAdministrator = require('../controllers/authorization').isAdministrator;

router.get('/', validate, isAdministrator, controller.findAll);
router.get('/:_id', validate, controller.findById);
router.post('/', controller.save);
router.put('/:_id', validate, controller.save);
router.delete('/:_id', validate, isAdministrator, controller.remove);

module.exports = router;
