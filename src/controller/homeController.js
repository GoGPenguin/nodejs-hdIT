import pool from "../config/connectDB"

let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.render('index.ejs', { dataUser: rows });

}

let getDetailpage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM users WHERE id = ${id}`);
    return res.send(JSON.stringify(user));
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute(`Insert into users(fName, lName, email, address) values(?, ?, ?, ?)`,
        [firstName, lastName, email, address]);
    return res.redirect('/');
}

module.exports = {
    getHomepage, getDetailpage, createNewUser
}