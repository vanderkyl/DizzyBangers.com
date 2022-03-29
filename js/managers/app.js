
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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    getElementByTag("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}
