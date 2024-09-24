// const connection = require('../config/database')

// const getAllUsers = async () =>{
//     let [results, field] = await connection.query('Select * from Users');
//     return results
// };

// const createNewUser = async (email, name, city) => {
//     let[results, field]= await connection.query(
//         `INSERT INTO Users (email, name, city) VALUES(?,?,?)`
//         ,[email, name, city],
//         // function (err, results) {
//         //     res.send('create user succeed')
//         // }
//       );
// };

// const getUsersById = async (userId) =>{

//     let [results, field] = await connection.query('Select * from Users where id = ? ', [userId]);

//     let user= results && results.length > 0 ? results[0] : {};
//     return user
// };

// const updateUserById = async (email, city, name, id) =>{
//     let[results, field]= await connection.query(
//         `UPDATE Users
//         SET email = ?, city= ?, name=?
//         WHERE id = ?`,
//         [email, city, name, id ],
//       );
// };

// const postDeleteUsersByID = async (id) =>{

//     let [results, field] = await connection.query(
//         `DELETE FROM Users WHERE id= ?;`,
//         [id],
//     );
// };

// module.exports = {
//     getAllUsers, getUsersById, updateUserById, createNewUser, postDeleteUsersByID
// }