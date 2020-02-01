angular.module('AngularJsExample', ['ui.router'])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: "./home.html",
            controller: "homeController"
          }
        
          var gotState = {
            name: 'got',
            url: '/got',
            templateUrl: './gotTable.html',
            contoller: "gotController"
          }
        
          $stateProvider.state(homeState);
          $stateProvider.state(gotState);
    }])
    .controller('navController', ['$scope', function ($scope) {
        $scope.searchLabel = 'Search';

    }])
    .controller('homeController', ['$scope', function ($scope) {
        $scope.currentMenuItem = "home";
        $scope.title = "This is the home page";


    }])
    .controller('gotController', ['$scope', '$stateParams', 'GoTService', function ($scope, $stateParams, GoTService) {
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