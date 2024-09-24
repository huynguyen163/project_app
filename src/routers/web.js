// const express = require('express');
// const {getHomepage, getAbc, getHuy, postCreateUser,
// getCreateUsers, getUpdatePage, postUpdatePage, postDeletePage, postDeleteUser} = require('../controllers/homeController');
import express from 'express';
const router = express.Router();
import homeController from '../controllers/homeController';

// router.Method('/route', handler)
router.get('/', homeController.getHomepage);

module.exports = router;
