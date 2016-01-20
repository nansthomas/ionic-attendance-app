'use strict';

var cacheActive = false;

app.config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            cache: cacheActive,
            url: '/',
            templateUrl: 'js/views/home/index.html',
            controller: 'homeIndex'
        })
});
