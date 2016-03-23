bplApp.factory('bTeamSvc',
    function ($resource, $q) {
        var teams = $resource('/api/v1/teams:tId',{tId:"@id"});
        var team = $resource('/api/v1/team/:tId',{tId:"@id"});

        return{
            getTreams: function () {
                var dfd = $q.defer();

                teams.get({}, function (response) {
                    dfd.resolve(response.teams);
                }, function (response) {
                    dfd.reject(response.data.reason);
                });

                return  dfd.promise;
            },

            getIndividualTeam: function (id) {
                var dfd = $q.defer();

                team.get({tId:id},function(response){
                    dfd.resolve(response);
                }, function () {
                    dfd.reject(false);
                });

                return dfd.promise;

            }
        }
});