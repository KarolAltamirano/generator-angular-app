import 'babel-polyfill';
import 'modernizr';
import 'normalize.css/normalize.css';

// import global styles
import './style/global/global.scss';

// import copy
import copy from '../copy/copy.json';

// render incompatible browser screen
import incompatible from './utilities/incompatible';
import incompatibleTemplate from './views/incompatible/incompatible.html';
import incompatibleStyle from './views/incompatible/incompatible.scss';

incompatible.addClass();
incompatible.render(incompatibleTemplate, incompatibleStyle, copy.incompatible);

// render build version
import version from './utilities/version';
import versionTemplate from './views/version/version.html';
import versionStyle from './views/version/version.scss';

version.logConsole();
version.render(versionTemplate, versionStyle, version.getCopy());

// render loader
import loader from './utilities/loader';
import loaderTemplate from './views/loader/loader.html';
import loaderStyle from './views/loader/loader.scss';

// set loader callbacks
function _progress(e) {
    var p = Math.round(100 * e.progress);

    // render progress in loader
    loader.render(loaderTemplate, loaderStyle, { loader: p + copy.loader.progress });
}

function _complete() {
    // create new chunk
    require.ensure([], function (require) {
        var angular = require('angular'),
            app = require('../app/app').default;

        // hide loader
        loader.hide();

        // run app
        angular.bootstrap(document, [app], { strictDi: true });
    });
}

// bootstrap application
window.addEventListener('load', () => {
    if (!incompatible.isIncompatibleBrowser()) {
        // show loader
        loader.render(loaderTemplate, loaderStyle, { loader: copy.loader.start });
        loader.show();

        // start loader
        loader.createLoader('main', _progress, _complete);
    }
});
