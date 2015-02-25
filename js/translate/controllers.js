'use strict';

/**
* Translate Module
*
*/
angular.module('ngPlayground.translate', [])

.controller('TranslateController', ['$scope', '$locale', function($scope, $locale) {
    console.log($locale.DATETIME_FORMATS);
    this.translateString = 'bar';
    this.pluralCount = 1;
    this.months = $locale.DATETIME_FORMATS.MONTH;
}])
;
