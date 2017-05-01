myApp.controller('ChooseThemeController', ['$scope', '$http', '$location','$interval', '$animate', 'UserService', function($scope, $http, $location, $interval, $animate, UserService) {

  //gets the user and lets the user logout
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  //var
  $scope.currentThemeObject = UserService.currentThemeObject;

  //get all themes from the database
  $scope.getAllThemes = UserService.getAllThemes;
  $scope.getAllThemes();
  $scope.themes = UserService.themes;
  console.log("$scope.themes", $scope.themes);

  //add theme and questions to database
  $scope.newQuestion = '';

  $scope.addQuestion = addQuestion;
  $scope.deleteQuestion = deleteQuestion;

  function addQuestion(newQuestion){
    if (newQuestion === ''){
      return;
    }
    var question = angular.copy(newQuestion);
    $scope.currentThemeObject.questionsArray.push(question);
    $scope.newQuestion = '';
  }//ends addQuestion

  function deleteQuestion(index){
    $scope.currentThemeObject.questionsArray.splice(index,1);
  }//ends deleteQuestion

  //choose existing theme
  $scope.chooseTheme = chooseTheme;

  function chooseTheme(object){
    console.log("I made it to chooseTheme, and I have this object", object);
    $scope.currentThemeObject = object;
    object = {};
  }//ends chooseSession

  //add theme
  $scope.addTheme = UserService.addTheme;
  $scope.addNewTheme = addNewTheme;
  function addNewTheme(currentThemeObject){
    newTheme = angular.copy(currentThemeObject);
    $scope.addTheme(newTheme);
  }


  //update theme
  $scope.updateTheme = UserService.updateTheme;


}]);//ends UserController
