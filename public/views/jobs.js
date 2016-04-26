angular.module('app').component('jobs', {
   templateUrl: '/views/jobs.html',
    controller: function(rootRef, $firebaseObject) {
        this.data = $firebaseObject(rootRef);
        
        console.log($firebaseObject(rootRef));
    }
})