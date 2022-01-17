
var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);


app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'mainController',
    templateUrl: 'views/main.html'
  })
  .when('/main', {
    controller: 'mainController',
    templateUrl: 'views/main.html'
  })
  .when('/socials', {
    controller: 'socialsController',
    templateUrl: 'views/socials.html'
  })
  .when('/news', {
    controller: 'newsController',
    templateUrl: 'views/news.html'
  })
  .when('/photos', {
    controller: 'photosController',
    templateUrl: 'views/photos.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
