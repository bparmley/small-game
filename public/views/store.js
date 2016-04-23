angular.module('app').component('store', {
   templateUrl: '/views/store.html',
    controller: function(rootRef) {
        rootRef.on('value', function(){
            console.log('connected');
        });
    }
})