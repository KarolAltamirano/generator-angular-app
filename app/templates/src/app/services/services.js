import angular from 'angular';

import templateFactory from './templateFactory';

export default angular.module('services', [])
    .factory(...templateFactory)
    .name;
