import angular from 'angular';

import templateFactory from './templateFactory';

export default angular.module('appServices', [])
    .factory(...templateFactory)
    .name;
