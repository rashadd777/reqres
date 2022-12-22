const fs = require('fs');
const express = require('express');
const app = express();

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        app.get('/user/:id', function (req, res) {
            res.send(JSON.stringify(JSON.parse(data).find((user) => user.id == req.params.id)));
        });
        app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });
    } else {
        console.error(err);
    }
});



