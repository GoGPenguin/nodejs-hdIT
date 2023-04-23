import connection from "../config/connectDB"

let getHomepage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstname: row.fName,
                    lastName: row.lName,
                })
            });
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        }
    );
}

module.exports = {
    getHomepage
}