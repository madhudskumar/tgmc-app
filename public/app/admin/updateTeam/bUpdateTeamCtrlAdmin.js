bplApp.controller('bUpdateTeamCtrlAdmin',
    function bUpdateTeamCtrlAdmin ($scope, bTeamSvc , bTeamSvcAdmin, $window) {
        $scope.teams = {};
        $scope.curTeamIndex = '';

        bTeamSvc.getTreams()
            .then(function (data) {
                $scope.teams = data;
            });

        $scope.curTeam = '0';

        $scope.order = "ScoreTotal";

        $scope.openEdit = function (team, index) {
            $scope.curTeam = team;
            $scope.curTeam.ScoreForThisRound = '';
            $scope.curTeamIndex = index;
            $scope.curTeam.ScoreTotal = parseInt($scope.curTeam.ScoreTotal);
            $scope.totalScore = parseInt($scope.curTeam.ScoreTotal);
            $.UIkit.modal('#modal').show();
        };

        $scope.updateTeam = function (team) {
            console.log(parseInt($scope.totalScore));
            console.log(parseInt(team.ScoreForThisRound));
            $window.ts = team.ScoreTotal =  parseInt(parseInt($scope.totalScore) + parseInt(team.ScoreForThisRound));

            bTeamSvcAdmin.updateTeam(team)
                .then(function () {
                    console.log('success');
                    $.UIkit.modal('#modal').hide();
                }, function () {
                    console.log('err');
                    $.UIkit.modal('#modal').hide();
                })

        };

        $scope.updateTotalScore = function (team) {
            bTeamSvcAdmin.updateTeam(team)
                .then(function () {
                    console.log('success');
                    $.UIkit.modal('#modal').hide();
                }, function () {
                    console.log('err');
                    $.UIkit.modal('#modal').hide();
                })
        }
    }
);
