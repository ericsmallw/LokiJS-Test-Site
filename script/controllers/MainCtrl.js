///<reference path="../_app.ts" />
var app;
(function (app) {
    var MainCtrl = (function () {
        function MainCtrl($scope, userNameFactory) {
            this.$inject = ['$scope', 'usernameFactory'];
            $scope.getUsername = function () {
                userNameFactory.getUsername().success(function (data) {
                    $scope.username = data;
                });
            };
        }
        return MainCtrl;
    })();
    app.controllers.controller('MainCtrl', ['$scope', 'usernameFactory', MainCtrl]);
})(app || (app = {}));
//# sourceMappingURL=MainCtrl.js.map