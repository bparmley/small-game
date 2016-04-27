angular.module('app').component('store', {
    templateUrl: '/views/store.html',
    bindings: {
        dataSeed: '='
    },
    controller: function (fbRef, $firebaseArray, $firebaseObject) {
        this.items = $firebaseArray(fbRef.getItemsRef().orderByChild("cost"));
        this.userInfo = $firebaseObject(fbRef.getUserInfoRef());
        this.buy = function(item){
            item.inventory = true;
            this.userInfo.gold -= item.cost;
            this.userInfo.ilevel += item.level;
            this.items.$save(item);
            this.userInfo.$save();
        };
    }
})