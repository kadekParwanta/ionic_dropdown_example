// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.dropdown'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope, $ionicDropdown) {
  $scope.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light'},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark'},
      {name:'yellow', shade:'light'}
    ];
  $scope.myColor = $scope.colors[2]; // red
})
