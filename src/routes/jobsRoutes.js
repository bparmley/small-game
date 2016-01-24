var express = require('express');
var mongodb = require('mongodb').MongoClient;
var jobsRouter = express.Router();
var objectId = require('mongodb').ObjectId;
var router = function (topnav) {

    jobsRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/gameApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('jobs');

                collection.find({}).toArray(function (err, results) {
                    res.render('jobListView', {
                        title: 'Jobs',
                        topnav: topnav,
                        jobs: results
                    });
                });
            });
        });

    jobsRouter.route('/:id')
        .get(function (req, res) {
            var id = new objectId(req.params.id);
            var url = 'mongodb://localhost:27017/gameApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('jobs');

                collection.findOne({
                    _id: id
                }, function (err, results) {
                    res.render('jobView', {
                        title: 'Jobs',
                        topnav: topnav,
                        job: results
                    });
                });
            });
        });

    jobsRouter.route('/easy')
        .get(function (req, res) {
            res.send('Hello Easy Jobs');
        });

    jobsRouter.route('/hard')
        .get(function (req, res) {
            res.send('Hello Hard Jobs');
        });

    return jobsRouter;
};
module.exports = router;