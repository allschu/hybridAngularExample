angular.module('AngularJsExample', ['ui.router', 'ncy-angular-breadcrumb'])
    .config(["$stateProvider", "$urlRouterProvider", "$breadcrumbProvider", function ($stateProvider, $urlRouterProvider, $breadcrumbProvider) {
        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: "./home.html",
            controller: "homeController"
        };

        var gotState = {
            name: 'got',
            url: '/got',
            templateUrl: './gotTable.html',
            controller: "gotController",
            ncyBreadcrumb: {
                label: 'got'
            }
        };

        $stateProvider.state(homeState);
        $stateProvider.state(gotState);
    }])
    .controller('navController', ['$scope', function ($scope) {
        $scope.searchLabel = 'Search';

    }])
    .controller('homeController', ['$scope', function ($scope) {
        $scope.title = "This is the home page";


    }])
    .controller('gotController', ['$scope', '$state', 'GoTService', function ($scope, $state, GoTService) {
        $scope.currentPage = 1;

        GoTService.getCharacters($scope.currentPage, 20).then(function (result) {
            $scope.characters = result.data;
        });

        $scope.previousPage = function(){
            $scope.currentPage = $scope.currentPage - 1;
            
            GoTService.getCharacters($scope.currentPage, 20).then(function (result) {
                $scope.characters = result.data;
            });
        };

        $scope.nextPage = function () {
            $scope.currentPage = $scope.currentPage + 1;
            
            GoTService.getCharacters($scope.currentPage, 20).then(function (result) {
                $scope.characters = result.data;
    
            });
        };

       
    }])
    .directive('bread', function () {
        return {
            restrict: 'E',
            templateUrl: 'breadcrumb.html'
        };
    });