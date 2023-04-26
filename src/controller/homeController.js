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

let deleteUser = async (req, res) => {
    let id = req.body.userId;
    await pool.execute(`delete from users where id = ${id}`);
    return res.redirect('/');
}

let updateUser = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ${id}`)
    return res.render('edit.ejs', { information: user });
}

let editUser = async(req, res) => {
    let {firstName, lastName, email, address, userId} = req.body;
    await pool.execute(`update users set fName = ?, lName = ?, email = ?, address = ? where id = ?`,
    [firstName, lastName, email, address, userId])
    return res.redirect('/');
}

module.exports = {
    getHomepage, getDetailpage, createNewUser, deleteUser, updateUser, editUser
}