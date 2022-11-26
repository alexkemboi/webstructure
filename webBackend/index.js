const express=require("express");
const mysql=require("mysql");
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'testd'
});
//connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("mysql connected successfully");
});
const app=express();
//create db
app.get('/createdb',(req,res)=>{
    let sql='CREATE DATABASE testd';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('db created successfully');
    });        
    });

app.get('/createtable',(req,res)=>{
    let sql='CREATE TABLE testtable(id int,name VARCHAR(255),PRIMARY KEY (id))';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('table created successfully');
    });
});
//insert record
app.get('/insertrecord',(req,res)=>{
    let record={id:'2',name:"alex"}
    let sql='INSERT INTO testtable SET ?';
    db.query(sql,record,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('record inserted successfully');
    });
});
app.get('/insertrecord',(req,res)=>{
    let record={id:'2',name:"alex"}
    let sql='INSERT INTO testtable SET ?';
    db.query(sql,record,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('record inserted successfully');
    });
});
app.get('/fetchrecord',(req,res)=>{
    let sql='SELECT * FROM testtable';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('record fetched successfully');
    });
});
app.get('/fetchrecord/:id',(req,res)=>{
    let sql=`SELECT * FROM testtable WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('record fetched successfully');
    });
});
app.listen('3000',()=>{
    console.log("server started at port 3000");
});