myApp.controller('SessionIntroController', ['$scope', 'UserService', function($scope, UserService) {
  $scope.currentSessionObject = UserService.currentSessionObject;
  $scope.startSession = UserService.startSession;
}]);//ends sessionIntroController
