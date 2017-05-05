myApp.controller('ChooseThemeController', ['$scope', 'UserService', function($scope, UserService) {

  //gets the user and lets the user logout
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  //var
  $scope.currentThemeObject = UserService.currentThemeObject;

  //get all themes from the database
  $scope.getAllThemes = UserService.getAllThemes;
  $scope.getAllThemes();
  $scope.themes = UserService.themes;

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
    console.log("$scope.currentThemeObject.questionsArray",$scope.currentThemeObject.questionsArray);
  }//ends deleteQuestion

  //choose existing theme
  $scope.chooseTheme = chooseTheme;

  function chooseTheme(object){
    $scope.currentThemeObject = object;
    object = {};
  }//ends chooseSession

  //add theme
  $scope.addTheme = UserService.addTheme;


  //update theme
  $scope.updateTheme = UserService.updateTheme;

}]);//ends ChooseThemeController
