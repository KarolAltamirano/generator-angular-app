import angular from 'angular';

import templateDirective from './template/templateDirective';

export default angular.module('directives', [])
    .directive(...templateDirective)
    .name;
