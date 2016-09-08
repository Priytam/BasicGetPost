/**
 * Created by pjpandey on 9/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.basic')
        .constant('POST_BODY_DATA', {
            native: 'Ballia',
            state: 'U.P.',
            country: 'India',
            aboutMe: 'I love writing code and love more deleting them'
        })
        .factory('Service', Service);

    function Service($http, POST_BODY_DATA) {

        var service = {
            sendGetRequest : sendGetRequest,
            sendPostRequest : sendPostRequest

        };

        return service;

        ////////////////

        function sendPostRequest() {
            return $http.post('/api/Priytam/Male?graduation=B.Tech&employed=Intel&designation=Developer', POST_BODY_DATA);
        }

        function sendGetRequest() {
            return $http.get('/api/Priytam/Male?graduation=B.Tech&employed=Intel&designation=Developer')
        }
    }
})();