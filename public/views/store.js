angular.module('app').component('store', {
   templateUrl: '/views/store.html',
    controller: function(rootRef, $firebaseObject) {
        this.data = $firebaseObject(rootRef);
        
        console.log($firebaseObject(rootRef));
    }
})