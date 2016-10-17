// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxT5b2pn0S_COdfI0uT_co2qo_yot-Wug",
  authDomain: "bloc-chat-b2d90.firebaseapp.com",
  databaseURL: "https://bloc-chat-b2d90.firebaseio.com",
  storageBucket: "bloc-chat-b2d90.appspot.com",
  messagingSenderId: "182689576764"
};
firebase.initializeApp(config);
var app = angular.module("BlocChat", ["firebase"]);


app.controller("RoomCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("rooms");
  // create a synchronized array
  $scope.rooms = $firebaseArray(ref);
  // console.log($scope.rooms);
  $scope.rooms.$loaded(function (list) {
    // console.log(list.$keyAt(list[0]));
    $scope.currentRoom = $scope.rooms.$getRecord(list.$keyAt(list[0]));
  });
  // $scope.currentRoom = $scope.rooms.$getRecord($scope.rooms.$keyAt(0));

  $scope.setCurrentRoom = function(room) {
    //find the $id of the room
    $scope.currentRoom = room;
    console.log(room);
  };

  // add new items to the array
  // the room is automatically added to our Firebase database!
  $scope.addRoom = function(newRoomText) {
    $scope.rooms.$add({
      text: $scope.newRoomText,
    });
    $scope.newRoomText = '';
  };


  //new room message
  $scope.addRoomMessage = function(roomId) {

    // $scope.currentRoom = room;
    // $scope.currentRoomName = room.name;

    var messagesRef = firebase.database().ref().child("rooms/" + roomId + "/messages");
    $scope.roomMessages = $firebaseArray(messagesRef);


    $scope.roomMessages.$add({
      text: $scope.newRoomMessageText
    });
    $scope.newRoomMessageText = '';
  };
  // click on `index.html` above to see $remove() and $save() in action

});
