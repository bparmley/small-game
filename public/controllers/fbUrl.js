angular.module('app').constant('FirebaseUrl', 'https://dgm-game.firebaseio.com/')
    .service('rootRef', ['FirebaseUrl', Firebase]);