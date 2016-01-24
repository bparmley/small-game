var express = require('express');

var jobsRouter = express.Router();

var router = function (topnav) {

    var jobs = [
        {
            jobName: 'Job 1',
            jobType: 'Gathering',
            hardJob: false
    },
        {
            jobName: 'Job 2',
            jobType: 'Fighting',
            hardJob: false
    },
        {
            jobName: 'Job 3',
            jobType: 'Boss Fight',
            hardJob: true
    },
];

    jobsRouter.route('/')
        .get(function (req, res) {
            res.render('jobListView', {
                title: 'Jobs',
                topnav: topnav,
                jobs: jobs
            });
        });

    jobsRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('jobView', {
                title: jobs[id].jobName,
                topnav: topnav,
                job: jobs[id]
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