const express = require('express')
const router = express.Router();
const {getHomepage, getAbc, getHuy} = require('../controllers/homeController');


// router.Method('/route', handler)
router.get('/', getHomepage);

router.get('/abc', getAbc);

router.get('/huy',getHuy)

module.exports = router;
