angular.module('app').component('character', {
    templateUrl: '/views/character.html',
    bindings: {
        dataSeed: '='
    },
    controller: function (rootRef, $firebaseObject, fbRef, $firebaseArray) {
        this.userInfo = $firebaseObject(fbRef.getUserInfoRef());
        this.items = $firebaseArray(fbRef.getItemsRef().orderByChild("cost"));
        this.sellItem = function(item){
            item.inventory = false;
            this.userInfo.gold += item.buyback;
            this.userInfo.ilevel -= item.level;
            this.items.$save(item);
            this.userInfo.$save();
        };
    }
});