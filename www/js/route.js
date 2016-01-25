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
    })
;
