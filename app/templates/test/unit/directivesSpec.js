/* globals inject */

import { expect } from 'chai';
// import sinon from 'sinon';

describe('Directives', function () {

    describe('ng-bind', function () {
        var $compile,
            $rootScope;

        // beforeEach(angular.mock.module(''));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('should contains Hello World string', function () {
            var scope = $rootScope.$new(),
                element;

            scope.variable = 'Hello World';
            element = $compile('<div ng-bind="variable"></div>')(scope);
            scope.$digest();

            expect(element.html()).to.have.string('Hello World');
        });
    });
});
