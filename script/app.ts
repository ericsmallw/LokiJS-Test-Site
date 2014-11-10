///<reference path="_app.ts" />
///<reference path="services/UsernameFactory.ts" />
///<reference path="services/RouteProvider.ts" />
module app{
    export var controllers = angular.module('controllers', []);
    var myApp = angular.module('myApp', ['ngRoute', 'controllers']);

    myApp.factory('usernameFactory', ['$http',($http) =>{ return new UsernameFactory($http) }]);
    myApp.config(['$routeProvider', ($routeProvider) => { return new RouteProvider($routeProvider).getRoutes()}]);
}