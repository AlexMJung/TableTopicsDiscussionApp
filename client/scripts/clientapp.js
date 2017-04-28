var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController',
    })

    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController'
    })

    .when('/createSession', {
      templateUrl: '/views/templates/createSession.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .when('/addParticipants', {
      templateUrl: '/views/templates/addParticipants.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .when('/sessionIntro', {
      templateUrl: '/views/templates/sessionIntro.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .when('/session', {
      templateUrl: '/views/templates/session.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .otherwise({
      redirectTo: 'home'
    });
}]);
