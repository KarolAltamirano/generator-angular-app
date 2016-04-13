import template from './template.html';
import style from './style.scss';

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
