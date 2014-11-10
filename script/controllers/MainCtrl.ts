///<reference path="../_app.ts" />
module app{
    interface IMainScope extends ng.IScope{
        username: string;
        getUsername: () => void;
    }

    class MainCtrl{
        $inject = ['$scope', 'usernameFactory'];

        constructor($scope: IMainScope, userNameFactory){

            $scope.getUsername = function(){
                userNameFactory.getUsername().success(function(data){
                    $scope.username = data;
                });
            }

        }
    }

    app.controllers.controller('MainCtrl', ['$scope', 'usernameFactory',MainCtrl]);
}