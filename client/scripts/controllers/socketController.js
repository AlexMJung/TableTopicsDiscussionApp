myApp.controller('SocketController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
  console.log("socketController loaded");

  // var socket = io();
  function socketFunction(){
    var socket = io();
    var name = '';
    $scope.name = name;

    $scope.enterName = enterName;
    function enterName(name){
      var emitName = angular.copy(name);
      console.log("click'n time");
      console.log("name entered", name, emitName);
      socket.emit('emitName', emitName);
      $scope.name = '';
      return false;
    }
  }

  socketFunction();
}]);//ends sessionIntroController
