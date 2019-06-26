var app;

app = angular.module("Payroll", ["ngRoute", "ngMaterial", "ngMessages", "ngAnimate"]);

app.config([
  "$routeProvider", "$locationProvider", "$mdThemingProvider", function($routeProvider, $locationProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default').primaryPalette('yellow').dark();
    $locationProvider.html5Mode(true);
    return $routeProvider.when("/login", {
      templateUrl: "js/access/login/login.html",
      controller: "LoginCtrl"
    }).when("/signup", {
      templateUrl: "js/access/signup/signup.html",
      controller: "SignupCtrl"
    }).otherwise({
      redirectTo: '/login'
    });
  }
]);