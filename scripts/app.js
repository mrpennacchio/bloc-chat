// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxT5b2pn0S_COdfI0uT_co2qo_yot-Wug",
  authDomain: "bloc-chat-b2d90.firebaseapp.com",
  databaseURL: "https://bloc-chat-b2d90.firebaseio.com",
  storageBucket: "bloc-chat-b2d90.appspot.com",
  messagingSenderId: "182689576764"
};
firebase.initializeApp(config);
var app = angular.module("BlocChat", ["firebase", "ngCookies", "ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      // templateUrl: 'views/main.html',
      controller: 'RoomCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
app.run(['$cookies',
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '') {
          console.dir($('#myModal2'));
          console.log(currentUser);
            $('#myModal2').modal({backdrop:'static'});
            $('#myModal2').modal('show');
        }

    }
]);

app.controller("RoomCtrl", function($scope, $cookies, $firebaseArray) {
  var ref = firebase.database().ref().child("rooms");
  // create a synchronized array
  $scope.rooms = $firebaseArray(ref);



  //new User
    $scope.newUserName = $cookies.get('blocChatCurrentUser');
    $scope.addUser = function(name) {
      // $cookies.put('blocChatCurrentUser', name);

      console.log(name);
      if (name === undefined) {
        $('#myModal2').modal({backdrop:'static'});
        $('#myModal2').modal('show');
      } else {
        $cookies.put('blocChatCurrentUser', name);
        $scope.newName = '';
        $('#myModal2').modal('hide');
      }
    };



    //load page with first chatroom
  $scope.rooms.$loaded(function (list) {
    $scope.currentRoom = $scope.rooms.$getRecord(list.$keyAt(list[0]));
  });

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

    var messagesRef = firebase.database().ref().child("rooms/" + roomId + "/messages");
    $scope.roomMessages = $firebaseArray(messagesRef);
    //add new room message
    $scope.roomMessages.$add({
      text: $scope.newRoomMessageText,
      name: $cookies.get('blocChatCurrentUser')
        });
    $scope.newRoomMessageText = '';
  };
  // click on `index.html` above to see $remove() and $save() in action



});
