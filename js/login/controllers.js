'use strict';

/**
* Login Module
*
*/
angular.module('ngPlayground.login', [])

.controller('LoginController', ['$scope', '$location', 'loginService',
    function($scope, $location, loginService) {
        this.formData = {};

        this.submitLogin = function(form) {
            loginService.login(form);
        };
    }
])
;
