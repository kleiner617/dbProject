(function() {
    'use strict';
    angular
        .module('dbProjectApp')
        .factory('Employee', Employee);

    Employee.$inject = ['$resource'];

    function Employee ($resource) {
        var resourceUrl =  'api/employees/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
