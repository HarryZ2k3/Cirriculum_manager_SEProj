const pool = require('./index');


// authenticate admin's account
const authenticateAdminId = async function(adminId){
    try{
    const querry = `SELECT username
    FROM account.adminaccounts
    where username =$1`
    const result = await pool.query(querry,[adminId]);
    if(result.rows.length === 0){
        return null;
    }
    const adminid = result.rows[0].username;
    return adminid;
    }
    catch(error){
        console.error(error);
        throw error;
    }
}


const authenticateAdminPassword = async function(username,password){
    try{
    const querry = `SELECT password
    FROM account.adminaccounts
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
    authenticateAdminId,
    authenticateAdminPassword
}