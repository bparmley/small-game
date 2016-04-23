var store = angular.module('store', []);
var items = [
        {
            "_id": 1,
            "name": "Hammer",
            "description": "It is a squeaky inflatable hammer",
            "cost": 40,
            "level": 1,
            "buyback": 2,
            "inventory": true
        },
        {
            "_id": 2,
            "name": "Sword",
            "description": "It is a small sharp sword",
            "cost": 150,
            "level": 6,
            "buyback": 25,
            "inventory": false
        },
        {
            "_id": 3,
            "name": "Helmet",
            "description": "It is a good helmet",
            "cost": 140,
            "level": 5,
            "buyback": 22,
            "inventory": false
        }
];
var userInfo = {
    "name": "Gerald The Great",
    "gold": "0",
    "ilevel": 2
};
store.controller('StoreCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.userInfo = userInfo;
    $scope.items = items;
}]);
