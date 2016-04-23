angular.module('app').component('character', {
   templateUrl: '/views/character.html',
    controller: function(rootRef) {
        rootRef.on('value', function(){
            console.log('connected');
        });
    }
})