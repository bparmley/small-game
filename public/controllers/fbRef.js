angular.module('app').factory('fbRef', function(rootRef){
    return {
        getItemsRef: function() {
            return rootRef.child('items');
            
        },
        getUserInfoRef: function(){
            return rootRef.child('userInfo');
        }
    }
})