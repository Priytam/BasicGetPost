/**
 * Created by pjpandey on 9/8/2016.
 */
(function() {
    'use strict';

    angular.module('app.basic')
        .controller("Ctrl", Ctrl);

    function Ctrl(Service){
        var vm = this;
        vm.getCall = getCall;
        vm.postCall = postCall;

        function getCall(){
            Service.sendGetRequest().then(successCallback, errorCallback);
        }

        function postCall(){
            Service.sendPostRequest().then(successCallback, errorCallback);
        }

        function successCallback(res){
            vm.res = res.data;
        }

        function errorCallback(err){
            vm.err = err.data;
        }
    }

})();
