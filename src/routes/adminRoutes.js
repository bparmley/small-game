var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var jobs = [
        {
            jobName: 'Sickness Outbreak',
            jobType: 'Gathering',
            hardJob: false,
            description: 'There has been an outbreak of a horrible illness. Go gather herbs to heal the sick.',
            reward: 150
        },
        {
            jobName: 'Pickpockets',
            jobType: 'Fighting',
            hardJob: false,
            description: 'Those hooligans stole my coin purse. Go teach them a lesson and I will reward you.',
            reward: 250
        },
        {
            jobName: 'Crime Lord',
            jobType: 'Boss Fight',
            hardJob: true,
            description: 'A new crime lord has come into town. We don\'t want him here. Get rid of him by any means neccessary',
            reward: 700
        }
];

var router = function (topnav) {
    adminRouter.route('/addJobs')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/gameApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('jobs');
                collection.insertMany(jobs, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
            //res.send('inserting jobs');
        });

    return adminRouter;
};

module.exports = router;