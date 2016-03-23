bplApp.controller('bUpdateMatchCtrlAdmin',
    function bUpdateMatchCtrlAdmin ($scope, bFixturesSvc, bTeamSvc, ngProgressFactory, bUpdateMatchSvcAdmin) {
        $scope.matches = {};
        $scope.ngProgress = ngProgressFactory.createInstance();
        $scope.ngProgress.setColor('red');
        getMatches();

        $scope.showAll = false;

        $scope.openEdit = function (team, index) {
            $scope.curMatch = team;
            $scope.curTeamIndex = index;
            $.UIkit.modal('#modal').show();
        };

        $scope.deleteMatch = function (match, index) {
            $.UIkit.modal.confirm("delete?", function () {
                bUpdateMatchSvcAdmin.deleteMatch(match)
                    .then(function () {
                        $scope.matches.splice(index,1);
                    }, function () {
                        console.log('err');
                    })
            })
        };

        $scope.updateMatch = function (curMatch) {
            bUpdateMatchSvcAdmin.updateMatch(curMatch)
                .then(function () {
                    getMatches();
                    $.UIkit.modal('#modal').hide();
                }, function () {
                    console.log('err');
                })
        };

        $scope.round = [
            {name:'1'},
            {name:'2'},
            {name:'3'},
            {name:'4'}
        ];

        bTeamSvc.getTreams()
            .then(function (data) {
                $scope.ngProgress.start();
                $scope.teams = data;
                $scope.ngProgress.complete();
            });

        function getMatches (){
            bFixturesSvc.getData()
                .then(function (data) {
                    for(var i = 0; i < data.length; i++) assignTeamFor(data[i]);

                    $scope.matches = data;

                }, function () {
                    console.log('err');
                });
        }

        //TODO:assign teams to id
        function assignTeamFor(data){
            bTeamSvc.getIndividualTeam(data.teamOne)
                .then(function (team) {
                    data.teamOne = team;
                }, function () {
                    console.log('err');
                });

            bTeamSvc.getIndividualTeam(data.teamTwo)
                .then(function (team) {
                    data.teamTwo = team;
                }, function () {
                    console.log('err');
                })
        }
    }
);