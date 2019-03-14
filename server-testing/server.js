const express = require('express');

var app = express();

app.get('/',function(req, res){
    res.status(404).send({
        error: "Page not found."
    })
})

app.get('/users', function(req, res){
    res.send([{
        name : 'Hrithik Naha',
        age : 20
    },{
        name : 'Anurag Singh',
        age : 21
    }, {
        name : 'Ajay Kumar Suppa;',
        age : 21
    }])
})



app.listen(3002);
module.exports = {
    app
}