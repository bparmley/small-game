var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
    $routeProvider
    .when('/character', {
        template: '<character></character>',
    })
    .when('/store', {
        template: '<store></store>'
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