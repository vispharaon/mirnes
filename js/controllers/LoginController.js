'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;
        //vm.navShow = false;
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response, data) {
                console.log(response);
                if (response == "200") {
                    AuthenticationService.SetCredentials(data.User_Id, vm.username, vm.password, data.isAdmin, data.isExternal);
                    //vm.navShow = true;
                    $location.path('/');
                } else {
                    FlashService.Error(data.Message);
                    vm.dataLoading = false;

                }
            });            
        };
    }