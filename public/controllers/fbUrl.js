angular.module('app').constant('FirebaseUrl', 'https://dgm-game.firebaseio.com')
    .service('rootRef', ['FirebaseUrl', Firebase]);

/*
var url = 'https://dgm-game.firebaseio.com/';
var baseRef = new Firebase(url);
var itemsRef = new Firebase(url + 'items');
var userInfoRef = new Firebase(url + 'userInfo');

itemsRef.on('value', function(snap){
    setItems(snap.val());
});

  
var items = {};
for(var item in itemsRef){
    itemsRef.child(item).once('value', function(snap){
        items.push(snap.val());
        
        console.log(items);
    })
}

*/
