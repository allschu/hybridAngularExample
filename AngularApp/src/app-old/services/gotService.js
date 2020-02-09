angular.module('AngularJsExample')
    .service('GoTService', ['$http', function ($http) {
        
        function getCharacters(page, pageSize){
            return $http.get(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`);
        };
        
        return{
            getCharacters : getCharacters
        }

    }]);