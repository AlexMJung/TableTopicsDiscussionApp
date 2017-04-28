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

        .when('/session/chooseNextView', {
          templateUrl: '/views/templates/sessionTemplates/chooseNextView.html',
          controller: 'UserController',
          resolve: {
            getuser : ['UserService', function(UserService){
              return UserService.getuser();
            }]
          }
        })

        .when('/session/endSessionView', {
          templateUrl: '/views/templates/sessionTemplates/endSessionView.html',
          controller: 'UserController',
          resolve: {
            getuser : ['UserService', function(UserService){
              return UserService.getuser();
            }]
          }
        })

        .when('/session/percentView', {
          templateUrl: '/views/templates/sessionTemplates/percentView.html',
          controller: 'UserController',
          resolve: {
            getuser : ['UserService', function(UserService){
              return UserService.getuser();
            }]
          }
        })

        .when('/session/questionView', {
          templateUrl: '/views/templates/sessionTemplates/questionView.html',
          controller: 'UserController',
          resolve: {
            getuser : ['UserService', function(UserService){
              return UserService.getuser();
            }]
          }
        })

        .when('/session/summaryView', {
          templateUrl: '/views/templates/sessionTemplates/summaryView.html',
          controller: 'UserController',
          resolve: {
            getuser : ['UserService', function(UserService){
              return UserService.getuser();
            }]
          }
        })

        .when('/session/timerView', {
          templateUrl: '/views/templates/sessionTemplates/timerView.html',
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
