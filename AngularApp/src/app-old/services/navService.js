angular.module('AngularJsExample')
    .service('navService', ['$http', '$location', function ($http, $location) {
        console.log($location.path());
    }]);