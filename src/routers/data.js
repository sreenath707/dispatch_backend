const express = require('express');
const router = express.Router();
const dataControllers = require('../controllers/data');


 
router.get('/:collectionParam',dataControllers.getData);

module.exports = router;