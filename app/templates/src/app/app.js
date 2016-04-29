import angular from 'angular';
import ngTouch from 'angular-touch';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';

import animations from './animations/animations';
import directives from './directives/directives';
import services from './services/services';

import AppCtrl from './views/app/AppCtrl';
import appView from './views/app/appView.html';

import AppHomeCtrl from './views/app.home/AppHomeCtrl';
import appHomeView from './views/app.home/appHomeView.html';

import AppPageCtrl from './views/app.page/AppPageCtrl';
import appPageView from './views/app.page/appPageView.html';

import AppPageDetailCtrl from './views/app.page.detail/AppPageDetailCtrl';
import appPageDetailView from './views/app.page.detail/appPageDetailView.html';

/**
 * Register main angular app
 */
export default angular.module('app', [
    ngTouch,
    ngSanitize,
    uiRouter,
    animations,
    directives,
    services
])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        'ngInject';

        $stateProvider
            .state('app', {
                abstract: true,
                controller: AppCtrl,
                template: appView
            })
            .state('app.home', {
                url: '/',
                controller: AppHomeCtrl,
                template: appHomeView
            })
            .state('app.page', {
                url: '/page',
                controller: AppPageCtrl,
                template: appPageView
            })
            .state('app.page.detail', {
                url: '/detail',
                controller: AppPageDetailCtrl,
                template: appPageDetailView
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .name;
