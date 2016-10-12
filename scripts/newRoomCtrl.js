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
});
