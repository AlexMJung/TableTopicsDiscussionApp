var myApp = angular.module('myApp', ['ngRoute']);

// Filters ///
myApp.filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}]);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController',
    })

    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController'
    })

    .when('/chooseTheme', {
      templateUrl: '/views/templates/chooseTheme.html',
      controller: 'ChooseThemeController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .when('/addParticipants', {
      templateUrl: '/views/templates/addParticipants.html',
      controller: 'AddParticipantsController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .when('/sessionIntro', {
      templateUrl: '/views/templates/sessionIntro.html',
      controller: 'SessionIntroController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .when('/session', {
      templateUrl: '/views/templates/session.html',
      controller: 'SessionController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .when('/socket', {
      templateUrl: '/views/templates/socket.html',
      controller: 'SocketController'
    })

    .otherwise({
      redirectTo: 'login'
    });
}]);
