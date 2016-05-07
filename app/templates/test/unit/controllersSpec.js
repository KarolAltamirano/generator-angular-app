/* globals inject */

import { expect } from 'chai';
// import sinon from 'sinon';

import angular from 'angular';
import HomeCtrl from '../../src/app/views/app.home/AppHomeCtrl';

describe('Controllers', function () {
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

        it('should have style in $scope', function () {
            expect($scope.style).to.exist;
        });

    });
});
