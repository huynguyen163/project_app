require('dotenv').config();
// // // const mysql = require('mysql2/promise')
// // import mysql from 'mysql2/promise';

// // //create the connection to database
// // const connection = mysql.createPool({
// //     host: process.env.DB_HOST,
// //     user: process.env.DB_USER, //default empty
// //     database: process.env.DB_NAME,
// //     port: process.env.DB_PORT, // default la 3306
// //     password: process.env.DB_PASSWORD,
// //     waitForConnections: true,
// //     connectionLimit: 10,
// //     queueLimit: 0,
// // });

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('huy', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});


let connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connection;