var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '',
    database: 'dumbcourse'
});

conn.connect((error) => {
    if (!!error) {
        console.log(error)
    } else {
        console.log("DB Connected")
    }
});

module.export = conn