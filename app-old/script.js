angular.module('AngularJsExample', [])
    .controller('homeController', ['$scope', function ($scope) {
        $scope.title = "This is the home page";

        
    }])
    .controller('gotController', ['$scope', 'GoTService', function($scope, GoTService){
        
        GoTService.getCharacters(1, 100).then(function (result) {
            $scope.characters = result.data;

        });
    }])