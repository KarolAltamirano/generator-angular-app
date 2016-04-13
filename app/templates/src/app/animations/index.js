import angular from 'angular';
import ngAnimate from 'angular-animate';

import routerAnimation from './routerAnimation';

export default angular.module('appAnimations', [ngAnimate])
    .animation(...routerAnimation)
    .name;
