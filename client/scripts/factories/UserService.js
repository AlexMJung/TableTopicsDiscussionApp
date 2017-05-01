myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

//users
  //variables
  var userObject = {};

  //functions
  function getuser(){
    $http.get('/user').then(function(response) {
        if(response.data.username) {
            userObject.userName = response.data.username;
            console.log('User Data: ', userObject.userName);
        } else {
            $location.path("/login");
        }
    });//ends $http.get/user
  }//ends getuser

  function logout(){
    $http.get('/user/logout').then(function(response) {
      $location.path("/login");
    });//ends $http.get/user/logout
  }//ends logout


//chooseTheme
  //variables
  var themes = {};
  var currentThemeObject = {};
  currentThemeObject.theme = '';
  currentThemeObject.questionsArray = [];

  //functions
  function getAllThemes(){
    $http.get('/themes/getAll').then(function(response){
      console.log("getAllThemes response", response);
      themes.data = response.data;
      return themes.data;
    });//ends http.get/themes/getAll
  }//ends getAllThemes

  function addTheme(newThemeObject){
    $http.post('/themes/addTheme', newThemeObject).then(function(response){
        currentThemeObject.data = response.data;
        $location.path("/addParticipants");
    });//ends http.post/themes/addTheme
  }//ends createTheme

  function updateTheme(updateObject){
    $http.put('/themes/updateTheme', updateObject).then(function(response){
      currentThemeObject.data = response.data;
      $location.path("/addParticipants");
    });//ends http.put/themes/updateTheme
  }//ends updateTheme


  return {

    //user related functionality
    userObject : userObject,
    getuser: getuser,
    logout: logout,

    //chooseTheme related functionality
    //theme variables
    currentThemeObject: currentThemeObject,
    themes: themes,
    //theme functions
    getAllThemes: getAllThemes,
    addTheme: addTheme,
    updateTheme: updateTheme,


  };//ends return
}]);//ends myApp.factory
