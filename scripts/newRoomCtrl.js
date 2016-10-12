var app = angular.module("BlocChat", ["firebase"]);

app.controller("RoomCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("rooms");
  // create a synchronized array
  $scope.rooms = $firebaseArray(ref);

  // add new items to the array
  // the room is automatically added to our Firebase database!
  $scope.addRoom = function() {
    $scope.rooms.$add({
      text: $scope.newRoomText
    });
    $scope.newRoomText = '';
  };

//new room message
  $scope.addRoomMessage = function(roomId) {
    var messagesRef = firebase.database().ref().child("rooms/" + roomId);
    $scope.roomMessages = $firebaseArray(messagesRef);

    $scope.roomMessages.$add({
      text: $scope.newRoomMessageText
    });
    $scope.newRoomMessageText = '';
  };
  // click on `index.html` above to see $remove() and $save() in action

//getMessage
  // $scope.getMessages = function(room) {
  //   $scope.currentRoom = room;
  //
  // }

});
