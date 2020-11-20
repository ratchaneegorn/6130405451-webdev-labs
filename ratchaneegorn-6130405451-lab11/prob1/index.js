var express = require('express');
var app = express()

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req, res) {
        res.render('dynamics', {
        name:"Ratchaneegorn",
        DIGIO:"DIGIO",
        WONGNAI:"WONGNAI",
        url:"https://github.com/ratchaneegorn",
        company1:"https://www.digio.co.th/about-us",
        company2:"https://www.wongnai.com/"
    });
});

app.listen(3000);

// app.get('/static_files', function(req, res) {
//     res.render('static_view');
// });

// app.use(express.static('public'));
// app.use(exptress.static('images'));

