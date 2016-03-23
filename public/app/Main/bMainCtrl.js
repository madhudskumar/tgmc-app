bplApp.controller('bMainCtrl',
    function ($scope, ngProgressFactory, $timeout) {
        $scope.ngProgress = ngProgressFactory.createInstance();
        $scope.ngProgress.setColor('red');
        $scope.ngProgress.set(70);

        $timeout(function () {
           $scope.ngProgress.complete();
        },2000);
    }
);