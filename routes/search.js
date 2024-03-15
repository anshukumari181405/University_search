const express = require('express');
const router = express.Router();
const {searchUniversities} = require('../controllers/searchController');

router.get('/', searchUniversities);

module.exports = router;