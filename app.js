var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var topnav = [
    {
        link: '/jobs',
        text: 'Jobs'
                }, {
        link: '/inventory',
        text: 'Inventory'
                }, {
        link: '/store',
        text: 'Store'
                }
            ];

var jobsRouter = require('./src/routes/jobsRoute.js')(topnav);

var inventoryRouter = express.Router();
var storeRouter = express.Router();

app.use(express.static('public'));
app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/jobs', jobsRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Simple Game',
        topnav: [
            {
                link: '/jobs',
                text: 'Jobs'
            }, {
                link: '/inventory',
                text: 'Inventory'
            }, {
                link: '/store',
                text: 'Store'
            }
        ]
    });
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});