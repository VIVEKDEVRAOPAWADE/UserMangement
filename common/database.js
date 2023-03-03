const mysql = require('mysql');

function connect() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'user123',
        password: 'user123',
        database: 'UserMangement'
    });

    connection.connect();
    return connection;
}

module.exports = {
    connect: connect
};