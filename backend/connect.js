const sql = require('mssql/msnodesqlv8');


  const config = {
    server: "localhost",
    user: "sa",
    password: "nguyenphamminh21033140803",
    database: "TEST",
    driver: "msnodesqlv8"
  }



const connect = new sql.ConnectionPool(config).connect().then(pool => {
return pool;
    
});





module.exports = {
    connect:connect,
    sql: sql
}