var app;
(function (app) {
    var RouteProvider = (function () {
        function RouteProvider($routeProvider) {
            this.$routeProvider = $routeProvider;
        }
        RouteProvider.prototype.getRoutes = function () {
            this.$routeProvider.when('/', {
                templateUrl: "views/main.html",
                controller: "MainCtrl"
            }).otherwise({
                redirectTo: '/'
            });
        };
        RouteProvider.$inject = ['$routeProvider'];
        return RouteProvider;
    })();
    app.RouteProvider = RouteProvider;
})(app || (app = {}));
//# sourceMappingURL=RouteProvider.js.map