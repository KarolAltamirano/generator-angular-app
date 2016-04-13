import 'babel-polyfill';
import 'modernizr';
import 'normalize.css/normalize.css';

// import global styles
import './style/global/style.scss';

// import copy
import copy from '../copy/copy.json';

// render incompatible browser screen
import incompatible from './utilities/incompatible';
import incompTemplate from './views/incompatibleBrowser/template.html';
import incompStyle from './views/incompatibleBrowser/style.scss';

incompatible.addClass();
incompatible.render(incompTemplate, incompStyle, copy.incompatible);

// render build version
import version from './utilities/version';
import versionTemplate from './views/version/template.html';
import versionStyle from './views/version/style.scss';

version.logConsole();
version.render(versionTemplate, versionStyle, version.getCopy());

// render loader
import loader from './utilities/loader';
import loaderTemplate from './views/loader/template.html';
import loaderStyle from './views/loader/style.scss';

// set loader callbacks
function progressCb(e) {
    var p = Math.round(100 * e.progress);

    // render progress in loader
    loader.render(loaderTemplate, loaderStyle, { loader: p + copy.loader.progress });
}

function completeCb() {
    // create new chunk
    require.ensure([], function (require) {
        var angular = require('angular'),
            app = require('../app').default;

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
        loader.createLoader('main', progressCb, completeCb);
    }
});
