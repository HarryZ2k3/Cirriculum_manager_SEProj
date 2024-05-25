const pool = require('./index');


// authenticate student's account
const authenticateId = async function(studentId){
    try{
    const querry = `SELECT username
    FROM account.studentaccounts
    where username =$1`
    const result = await pool.query(querry,[studentId]);
    if(result.rows.length === 0){
        return null;
    }
    const studentid = result.rows[0].username;
    return studentid;
    }
    catch(error){
        console.error(error);
        throw error;
    }
}


const authenticatePassword = async function(username,password){
    try{
    const querry = `SELECT password
    FROM account.studentaccounts
    where username =$1`
    const result = await pool.query(querry,[username]);
    if(result.rows.length === 0){
        return null;
    }
    const password = result.rows[0].password;
    return password;
    }
    catch(error){
        console.error(error);
        throw error;
    }
}
////////////////


module.exports = {
    authenticateId,
    authenticatePassword,
}