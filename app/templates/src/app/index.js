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
import viewSubpageCtrl from './views/page-subpage';
import viewSubpageTemplate from './views/page-subpage/template.html';

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
            .state('app.page1', {
                url: '/page1',
                controller: viewPageCtrl,
                template: viewPageTemplate
            })
            .state('app.page1.detail', {
                url: '/detail',
                controller: viewSubpageCtrl,
                template: viewSubpageTemplate
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .name;
