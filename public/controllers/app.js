var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/character', {
            template: '<character data-seed="$resolve.dataSeed"></character>',
            resolve: {
                dataSeed: function (rootRef, $firebaseObject, $firebaseArray, fbRef) {
                    return $firebaseObject(rootRef).$loaded();
                    var query = fbRef.getItemsRef();
                    return $firebaseArray(query).$loaded();
                }
            }
        })
        .when('/store', {
            template: '<store data-seed="$resolve.dataSeed"></store>',
            resolve: {
                dataSeed: function (fbRef, $firebaseArray) {
                    var query = fbRef.getItemsRef();
                    return $firebaseArray(query).$loaded();
                    console.log("hi");
                }
            }
        })
        .when('/jobs', {
            template: '<jobs></jobs>'
        })
        .otherwise('/character')
});

/*app.controller('StoreCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.userInfo = userInfo;
    $scope.items = items;
}]);*/