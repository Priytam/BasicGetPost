/**
 * Created by pjpandey on 9/9/2016.
 */
(function() {
    'use strict';

    angular.module('app.basic')
        .config(configure);

    function configure($routeProvider) {
        $routeProvider.when("/",
            {
                templateUrl: "getAndPost/main.html",
                controller: "Ctrl",
                controllerAs: "vm"
            }
        );
    }
})();
