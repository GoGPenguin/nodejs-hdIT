import pool from "../config/connectDB"

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute(`Select * from users`);

    return res.status(200).json({
        message: 'Truong Son',
        data: rows
    })
}

let createNew = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }


    await pool.execute(`Insert into users(fName, lName, email, address) values(?, ?, ?, ?)`,
        [firstName, lastName, email, address]);

    return res.status(200).json({
        message: 'ok con de'
    })
}

let deleteUser = async (req, res) => {
    let id = req.params.id;

    if (!id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute(`delete from users where id = ${id}`);

    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, userId } = req.body;

    if (!firstName || !lastName || !email || !address || !userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute(`update users set fName = ?, lName = ?, email = ?, address = ? where id = ?`,
        [firstName, lastName, email, address, userId])

    return res.status(200).json({
        message: 'ok'
    })
}



module.exports = {
    getAllUsers, createNew, deleteUser, updateUser
}