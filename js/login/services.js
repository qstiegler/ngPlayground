'use strict';

/**
* Login Module
*
*/
angular.module('ngPlayground.login')

.service('loginService', ['$location', function($location) {
    this.login = function() {
        $location.path('/translate');
    };
}])
;
