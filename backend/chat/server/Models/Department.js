const pool = require('./index');

const getDepartmentId = async function(departmentShortName){
    try{
    const querry = `SELECT departmentid 
    FROM departments.inforlist
    where shortname =$1`
    const result = await pool.query(querry,departmentShortName);
    const departmentid = result.rows[0].departmentid;
    return departmentid;
    }
    catch(error){
        console.error(error);
        throw error;
    }
}

module.exports = {
    getDepartmentId,
}