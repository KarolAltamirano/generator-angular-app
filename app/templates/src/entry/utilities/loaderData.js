import loaderCommon from '../data/loaderCommon';
import loaderNoRetina from '../data/loaderNoRetina';
import loaderRetina from '../data/loaderRetina';

var isRetina = window.devicePixelRatio > 1,
    data;

if (isRetina) {
    data = loaderCommon.concat(loaderRetina);
} else {
    data = loaderCommon.concat(loaderNoRetina);
}

export default data;
