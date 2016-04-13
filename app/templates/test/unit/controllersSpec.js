/* globals inject */

import angular from 'angular';
import HomeCtrl from '../../src/app/views/home';
import loader from '../../src/entry/utilities/loader';

describe('Controllers', function () {

    loader.createSpyLoader('main', 'spy loader data');

    describe('MyCtrl', function () {
        var $scope,
            testModule;

        testModule = angular.module('testModule', [])
            .controller('HomeCtrl', HomeCtrl)
            .name;

        beforeEach(angular.mock.module(testModule));

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('HomeCtrl', { $scope: $scope });
        }));

        it('Placeholder', function () {
            expect($scope.style).toBeDefined();
        });

    });
});
