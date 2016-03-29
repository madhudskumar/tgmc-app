bplApp.controller('bTeamCtrlAdmin'
    ,function bTeamCtrlAdmin ($scope, bTeamSvcAdmin, $location) {
        $scope.logOutUser = function () {
            bTeamSvcAdmin.logOut()
                .then(function () {
                    $location.path('/index');
                })
        }
});