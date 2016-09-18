'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', '$scope'];
    function HomeController(UserService, $rootScope, $scope) {
        var vm = this;
        console.log(vm);
    }