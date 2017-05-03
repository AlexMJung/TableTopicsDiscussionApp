myApp.controller('SessionIntroController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
  $scope.currentSessionObject = UserService.currentSessionObject;
  $scope.startSession = UserService.startSession;

  $scope.goBack = goBack;
  function goBack(){
    $location.path("/addParticipants");
  }
}]);//ends sessionIntroController
