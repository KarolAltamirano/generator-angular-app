import angular from 'angular';
import ngTouch from 'angular-touch';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';

import appAnimations from './animations';
import appDirectives from './directives';
import appServices from './services';

import viewAbstractCtrl from './views/abstract';
import viewAbstractTemplate from './views/abstract/template.html';
import viewHomeCtrl from './views/home';
import viewHomeTemplate from './views/home/template.html';
import viewPageCtrl from './views/page';
import viewPageTemplate from './views/page/template.html';
import viewPageDetailCtrl from './views/page.detail';
import viewPageDetailTemplate from './views/page.detail/template.html';

/**
 * Register main angular app
 */
export default angular.module('app', [
    ngTouch,
    ngSanitize,
    uiRouter,
    appAnimations,
    appDirectives,
    appServices
])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        'ngInject';

        $stateProvider
            .state('app', {
                abstract: true,
                controller: viewAbstractCtrl,
                template: viewAbstractTemplate
            })
            .state('app.home', {
                url: '/',
                controller: viewHomeCtrl,
                template: viewHomeTemplate
            })
            .state('app.page', {
                url: '/page',
                controller: viewPageCtrl,
                template: viewPageTemplate
            })
            .state('app.page.detail', {
                url: '/detail',
                controller: viewPageDetailCtrl,
                template: viewPageDetailTemplate
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .name;
