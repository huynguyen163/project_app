// const connection = require('../config/database')
// const{getAllUsers, getUsersById, updateUserById, createNewUser, postDeleteUsersByID} = require('../services/CRUDService')

import connection from '../config/database';
import services from '../services/CRUDService';

import db from '../models/index'
const getHomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data)
        return res.render('home.ejs', { data: JSON.stringify(data) })
    } catch (e) {
        console.log(e)
    }
}


// tại vì có nhiều mục cần export nên phải dùng dấu oject {....}
module.exports = {
    getHomepage,
}