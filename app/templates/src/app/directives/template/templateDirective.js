import template from './templateDirective.html';
import style from './templateDirective.scss';

export default ['mdTemplateDirective', function () {
    'ngInject';

    return {
        restrict: 'AEC',
        template: template,
        scope: {},
        link: function (scope, element) {
            element;
            scope.style = style;
        }
    };
}];
