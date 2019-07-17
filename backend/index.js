const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medx',
});
connection.connect(function(err) {
    if(err)  throw err;
    console.log('connected');
});

app.use(cors());

app.get('/',(req,res)=>{
    res.send('go to /products to see to see products');
});
//
// app.get('/products/add' , (req,res)) => {
//
// });

app.get('/alldoctors',(req,res) => {
    // const { Speciality} = req.query;
    const SELECT_ALL_PRODUCTS_QUERY = `select * from doctor `;

    connection.query(SELECT_ALL_PRODUCTS_QUERY , (err,results) => {
        if(err)
        {
            return res.send(err);
        }
        else{
            return res.json(results);
        }
    })
});

app.listen(5000 , () => {
    console.log('products server listening on port 5000')
});