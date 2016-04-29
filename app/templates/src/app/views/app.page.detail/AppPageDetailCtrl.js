import style from './appPageDetailView.scss';
import loader from '../../../entry/utilities/loader';

export default function ($scope) {
    'ngInject';

    $scope.style = style;
    $scope.img = loader.getAsset('main', 'img');
}
