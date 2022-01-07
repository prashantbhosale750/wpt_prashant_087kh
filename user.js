const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
};


async function connectionCheck() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection sucess");
    await connection.endAsync();
    console.log("connection ended ");
}
connectionCheck();

const getall = async() => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = 'select * from message'
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    return list;
}
const postall = async(user) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = 'insert into message(name, city, centre) values';
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    return list;
}
module.exports = { getall, postall };