bplApp.controller('bAddMatchCtrlAdmin',
    function ($scope, bTeamSvc, $timeout, $window, $compile, bAddMatchSvcAdmin) {
        $scope.teams = {};

        bTeamSvc.getTreams()
            .then(function (data) {
                $scope.teams = data;
            });

        $scope.round = [
            {name:'1'},
            {name:'2'},
            {name:'3'},
            {name:'4'}
        ];

        $scope.addMatch = function (match) {
            if(match.teamOne === match.teamTwo){
                angular.element('#err').empty();
                $compile("<h1>Team Names Cannot be same</h1>")($scope).appendTo(angular.element("#err"));
                $timeout(function () {
                    angular.element('#err').empty();
                },2000);
                $scope.match = {};
                return;
            }

            bAddMatchSvcAdmin.addMatch(match)
                .then(function () {
                    console.log('added');
                    $scope.match = {};
                }, function () {
                    console.log('err');
                })
        }
    }
);