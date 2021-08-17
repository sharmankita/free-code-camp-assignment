var express = require('express');
var app = express();

console.log("Hello World")

app.get('/', function (req, res) {
    const request = require('request');
    let options = {
        'method': 'POST',
        'url': 'https://preview.compport.com/api/v1/core_reports/current_turnover',
        'headers': {
            'auth': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXQiOiJBZG1pbkB2YXB0LmNvbSIsInVpIjoiMSIsInJvbGUiOiIxIiwidW5pdCI6IjExIn0.g8K2almHd4GWi0ndkU8HGpOQ7B2MHBQLXPZRrTYvd-A',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "start_date": "19/08/2020",
            "end_date": "12/08/2021"
        })

    };
    request(options, (error, response) => {
        if(error){
            res.send(error)
        }else{
            res.send(response)
        }
    });
})


































module.exports = app;