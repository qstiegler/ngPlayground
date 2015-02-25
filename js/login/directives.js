'use strict';

/**
* Login Module
*
*/
angular.module('ngPlayground.login')

.directive('validatePassword', function() {
    // Runs during compile
    return {
        require: 'ngModel',
        link: function($scope, iElm, iAttrs, ctrl) {
            ctrl.$validators.password = function (modelValue, viewValue) {
                return (viewValue === 'test1234') ? true : false;
            };
        }
    };
})
;
