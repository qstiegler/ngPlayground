'use strict';

/**
*  ngPlayground
*/
angular.module('ngPlayground', ['ngRoute', 'ngMessages', 'gettext', 'tmh.dynamicLocale', 'ngPlayground.login', 'ngPlayground.translate'])

.config(['$routeProvider', '$locationProvider', 'tmhDynamicLocaleProvider',
    function($routeProvider, $locationProvider, tmhDynamicLocaleProvider) {
        $routeProvider
            .when('/:lang/translate', {
                templateUrl: '../partials/translate.html',
                controller: 'TranslateController',
                controllerAs: 'ctrl'
            })
            .when('/:language/login', {
                templateUrl: '../partials/login.html',
                controller: 'LoginController',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/de/login'
            });

        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: true
            });

        tmhDynamicLocaleProvider.localeLocationPattern('/bower_components/angular-i18n/angular-locale_{{locale}}.js');
    }
])

.run(['$routeParams', '$rootScope', 'gettextCatalog', 'tmhDynamicLocale',
    function($routeParams, $rootScope, gettextCatalog, tmhDynamicLocale) {
        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
            gettextCatalog.setCurrentLanguage($routeParams.lang);
            tmhDynamicLocale.set($routeParams.lang);
        });
    }
])

.controller('MainController', ['$scope', 'gettextCatalog', function($scope, gettextCatalog) {
    this.catalog = gettextCatalog;
    /*
     * Here everything happenes for each controller
     * it´s the parent of all controllers
     */
}])
;

