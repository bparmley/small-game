angular.module('app').component('jobs', {
   templateUrl: '/views/jobs.html',
    controller: function(rootRef) {
        rootRef.on('value', function(){
            console.log('connected');
        });
    }
})