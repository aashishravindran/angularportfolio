var app = angular.module("PassportApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/exp', {
      templateUrl: 'views/experience.html',
      controller: 'ExpCtrl'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller:'ProjCtrl'

    })
    .when('/skills', {
      templateUrl: 'views/skills.html',
      controller:'SkillsCtrl'

    })
    .otherwise({
      redirectTo: '/home'
    })
});