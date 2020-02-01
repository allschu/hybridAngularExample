angular.module('AngularJsExample', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./home.html",
                controller: "homeController"
            })
            .when("/Got", {
                templateUrl: "./gotTable.html",
                controller: "gotController"
            })
    })
    .controller('navController', ['$scope', function ($scope) {
        $scope.searchLabel = 'Search';

    }])
    .controller('homeController', ['$scope', function ($scope) {
        $scope.currentMenuItem = "home";
        $scope.title = "This is the home page";


    }])
    .controller('gotController', ['$scope', 'GoTService', function ($scope, GoTService) {
        $scope.currentMenuItem = 'got';
        GoTService.getCharacters(1, 20).then(function (result) {
            $scope.characters = result.data;

        });
    }])
    .directive('bread', function () {
        return {
            restrict: 'E',
            templateUrl: 'breadcrumb.html'
        };
    })