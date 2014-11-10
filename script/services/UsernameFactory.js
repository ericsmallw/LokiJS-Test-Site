var app;
(function (app) {
    var UsernameFactory = (function () {
        function UsernameFactory($http) {
            this.$http = $http;
        }
        UsernameFactory.prototype.getUsername = function () {
            return this.$http.get("http://localhost:3000/");
        };
        UsernameFactory.$inject = ['$http'];
        return UsernameFactory;
    })();
    app.UsernameFactory = UsernameFactory;
})(app || (app = {}));
//# sourceMappingURL=UsernameFactory.js.map