import Mustache from 'mustache';
import createjs from 'createjs';
import loaderData from './loaderData';

var loader = {},
    _loaderList = {},
    _loaderElement = document.querySelector('.loader');

/**
 * Create loader
 *
 * @param  {String}   id         - id of new loader
 * @param  {Function} progressCb - callback function during loading
 * @param  {Function} completeCb - callback function when loading is completed
 */
loader.createLoader = function (id, progressCb, completeCb) {
    if (_loaderList[id] != null) {
        throw new Error('Loader with id: ' + id + ' already exists.');
    }

    _loaderList[id] = new createjs.LoadQueue(true);

    _loaderList[id].addEventListener('progress', progressCb);
    _loaderList[id].addEventListener('complete', completeCb);

    _loaderList[id].loadManifest(loaderData);
};

/**
 * Create spy loader for unit tests
 *
 * @param  {String} id    - id of a loaderData
 * @param  {String} value - return value of the new loaderData
 */
loader.createSpyLoader = function (id, value) {
    if (_loaderList[id] != null) {
        throw new Error('Loader with id: ' + id + ' already exists.');
    }

    _loaderList[id] = {
        getResult: function () { return value; }
    };
};

/**
 * Get loader by its id
 *
 * @param  {String} id - id of a loaderData
 */
loader.getLoader = function (id) {
    if (_loaderList[id] == null) {
        throw new Error('Loader with id: ' + id + ' does not exist.');
    }

    return _loaderList[id];
};

/**
 * Load asset from loaderId
 *
 * @param {String} loaderId - id of loaderId
 * @param {String} assetId  - id of asset
 */
loader.loadAsset = function (loaderId, assetId) {
    var asset = loaderData.filter(element => element.id === assetId)[0];

    return URL.createObjectURL(
                new Blob([loader.getLoader(loaderId).getResult(assetId)], { type: asset.mimeType })
            );
};

/**
 * Destroy loaded asset
 *
 * @param {String} objectURL - url to asset created with loadAsset
 */
loader.destroyAsset = function (objectURL) {
    URL.revokeObjectURL(objectURL);
};

/**
 * Render version info to the DOM
 *
 * @param  {String} template - thml template
 * @param  {Object} style    - css style object
 * @param  {Object} copy     - page copy
 */
loader.render = function (template, style, copy) {
    var output = Mustache.render(template, { style, copy });

    document.querySelector('.loader').innerHTML = output;
};

/**
 * Show loader
 */
loader.show = function () {
    _loaderElement.style.display = 'block';
};

/**
 * Hide loader
 */
loader.hide = function () {
    _loaderElement.style.display = 'none';
};

export default loader;
