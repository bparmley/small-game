angular.module('app').component('character', {
   templateUrl: '/views/character.html',
    controller: function(rootRef, $firebaseObject) {
        this.data = $firebaseObject(rootRef);
        
        console.log($firebaseObject(rootRef));
    }
});