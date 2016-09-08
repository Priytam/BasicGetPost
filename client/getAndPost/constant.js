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
        });
})();