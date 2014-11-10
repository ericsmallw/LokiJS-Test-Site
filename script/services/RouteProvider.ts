module app{
    export class RouteProvider{
        static $inject = ['$routeProvider']
        constructor(public $routeProvider){}

        getRoutes(): void{
            this.$routeProvider.when('/', {
                templateUrl: "views/main.html",
                controller: "MainCtrl"
            }).otherwise({
                redirectTo: '/'
            })
        }
    }
}