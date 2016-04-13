import angular from 'angular';

import templateDirective from './templateDirective';

export default angular.module('appDirectives', [])
    .directive(...templateDirective)
    .name;
