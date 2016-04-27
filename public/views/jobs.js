angular.module('app').component('jobs', {
   templateUrl: '/views/jobs.html',
    controller: function(fbRef, $firebaseObject, $firebaseArray) {
        this.jobs = $firebaseArray(fbRef.getJobsRef().orderByChild("level"));
        this.userInfo = $firebaseObject(fbRef.getUserInfoRef());
        this.takeJob = function(job){
            this.userInfo.gold += job.pay;
            this.userInfo.$save();
        };
    }
})