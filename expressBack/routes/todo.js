const express = require('express');
const router = express.Router();

const todoCtrl = require('../controllers/todo')

router.post('/', todoCtrl.createThing);

router.put('/:id', todoCtrl.modifyThing);

router.delete('/:id', todoCtrl.deleteThing);

router.get('/:id', todoCtrl.getOneThing);

router.get('/', todoCtrl.getAllThing);

module.exports = router;