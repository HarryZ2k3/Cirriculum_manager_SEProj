const path = require('path')
const express = require('express')
// const axios = require(axios)




const {connect,sql} = require('./connect');

const app = express()
const port = 3000

//setting the static file as file image
app.use(express.static(path.join(__dirname,'resources/public')));
//__dirname: tương đương với đường dẫn
// vào folder src 
// link url: localhost:3000/ tương đương
// resources/public

//apply middleware cho việc chuyển thông tin từ form vào controller
app.use(express.urlencoded({
  extended: true
}));


// apply middleware cho việc chuyển thông tin từ form vào controller bằng những phương thức khác ngoài submit
// cho javascript
app.use(express.json());


// console.log('PATH: ', path.join(__dirname,'resources/views'));


//route init
app.get ('/', async (req, res)=>{ 
    // SELECT * FROM COURSES.InforList
    const pool = await connect;
    const sqlString = "SELECT * FROM COURSES.InforList";
    return await pool.request().query(sqlString,function(err,data){
      // console.log(err,data.recordset);
      res.send({result: data.recordset});
      // res.render('courses')
    });
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})