'use strict';

var cacheActive = false;

app
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                cache       : cacheActive,
                url         : '/',
                templateUrl : 'js/views/home/index.html',
                controller  : 'homeIndex'
            })
            .state('login', {
                cache       : cacheActive,
                url         : '/login',
                templateUrl : 'js/views/home/login.html',
                controller  : 'homeLogin'
            })
            .state('planningList', {
                cache       : cacheActive,
                url         : '/planning/list',
                templateUrl : 'js/views/planning/list.html',
                controller  : 'planningList'
            })
            .state('planningDetail', {
                cache       : cacheActive,
                url         : '/planning/:slug',
                templateUrl : 'js/views/planning/detail.html',
                controller  : 'planningDetail'
            })
            .state('historiqueList', {
                cache       : cacheActive,
                url         : '/historique/list',
                templateUrl : 'js/views/historique/list.html',
                controller  : 'historiqueList'
            })
            .state('historiqueDetail', {
                cache       : cacheActive,
                url         : '/historique/:slug',
                templateUrl : 'js/views/historique/detail.html',
                controller  : 'historiqueDetail'
            })
            .state('Settings', {
                cache       : cacheActive,
                url         : '/settings',
                templateUrl : 'js/views/settings/settings.html',
                controller  : 'settingsController'
            })
    })
;
