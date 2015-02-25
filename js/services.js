'use strict';

/**
* Translate Module
*
*/
angular.module('ngPlayground.factories', [])

.factory('LocalizationService', ['$routeParams', function($routeParams) {
    var userLanguage,
        availableTranslations = ['de'],
        defaultLanguage = 'en';

    var LocalizationService = function() {};

    LocalizationService.prototype.getBrowserLanguage = function() {
        return $window.navigator.userLanguage || $window.navigator.language;
    };

    LocalizationService.prototype.getLanguage = function() {
        return userLanguage;
    };

    return new LocalizationService();
}])
;
