const express = require('express');
const db = require('../common/database');
const utils = require('../common/utils');

var router = express.Router();

//add User part
router.post('/user',(request,response)=>{
    const name = request.body.name;
    const email = request.body.email;
    const dob = request.body.dob;
    
    var connection = db.connect();

    const statement = `insert into User (name,email,dob) values('${name}','${email}','${dob}')`;
    connection.query(statement, (error, results) => {
        connection.end();
        response.send(utils.createResult(error, results));
    });
})
//select  particular user
router.get('/user/:id', (request, response) => {
    const userId = request.params.id;

    var connection = db.connect();
    const statement = `select * from User where user_id = ${userId}`;
    connection.query(statement, (error, results) => {
        connection.end();
        response.send(utils.createResult(error, results));
    });
})


//delete a  user row
router.delete('/user/:id', (request, response) => {
    const userId = request.params.id;

    var connection = db.connect();
    const statement = `delete from User where user_id = ${userId}`;
    connection.query(statement, (error, results) => {
        connection.end();
        response.send(utils.createResult(error, results));
    });
})

//get all user
router.get('/getuser',(request,response)=>{
    var connection = db.connect();
    const statemnet = `select name, email, dob from User`;
    connection.query(statemnet,(error,results)=> {
        connection.end();
        response.send(utils.createResult(error,results));
    });
})

module.exports = router;