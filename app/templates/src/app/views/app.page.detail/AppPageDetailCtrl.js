import style from './appPageDetailView.scss';
import Loader from '../../../entry/utilities/Loader';

export default function ($scope) {
    'ngInject';

    $scope.style = style;
    $scope.img = Loader.getAsset('main', 'img');
}
