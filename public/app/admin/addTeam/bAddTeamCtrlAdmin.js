bplApp.controller('bAddTeamCtrlAdmin',
    function bAddTeamCtrlAdmin ($scope, bTeamSvcAdmin) {
        $scope.team = {};

        $scope.addTeamToDB = function (team) {
            if(!team){
                console.log('no Team');
                return;
            }

            bTeamSvcAdmin.addTeam(team)
                .then(function () {
                    console.log('added!');
                    $scope.team = {};
                }, function () {
                    console.log('err occurred !')
                })
        };

        $scope.options = [
            {id:1 , name:"TEXTILE"},
            {id:2 , name:"MECHANICAL"},
            {id:3 , name:"E & E"},
            {id:4 , name:"IS"},
            {id:5 , name:"EC"},
            {id:5 , name:"E & I"},
            {id:6 , name:"CHEMICAL"},
            {id:7 , name:"CIVIL"},
            {id:8, name:"M-TECH"},
            {id:9, name:"BIO-TECH"},
            {id:10, name:"MCA"},
            {id:11 , name:"CS & E"}
        ]
    }
);
