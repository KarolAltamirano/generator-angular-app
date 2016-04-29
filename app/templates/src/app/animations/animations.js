import angular from 'angular';
import ngAnimate from 'angular-animate';

import routerAnimation from './routerAnimation';

export default angular.module('animations', [ngAnimate])
    .animation(...routerAnimation)
    .name;
