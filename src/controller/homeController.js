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

module.exports = {
    getHomepage, getDetailpage
}