///<reference path="_app.ts" />
///<reference path="services/UsernameFactory.ts" />
///<reference path="services/RouteProvider.ts" />
var app;
(function (app) {
    app.controllers = angular.module('controllers', []);
    var myApp = angular.module('myApp', ['ngRoute', 'controllers']);
    myApp.factory('usernameFactory', ['$http', function ($http) {
        return new app.UsernameFactory($http);
    }]);
    myApp.config(['$routeProvider', function ($routeProvider) {
        return new app.RouteProvider($routeProvider).getRoutes();
    }]);
})(app || (app = {}));
//# sourceMappingURL=app.js.map