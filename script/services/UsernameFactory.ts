
module app{
    export class UsernameFactory{
        static $inject = ['$http']
        constructor(public $http){}

        public getUsername():any{
                    return this.$http.get("http://localhost:3000/");

        }
    }
}