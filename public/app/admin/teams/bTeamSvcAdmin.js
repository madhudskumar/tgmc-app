bplApp.factory('bTeamSvcAdmin',
    function ($resource, $q, bIdentity, $http) {
        var teamApi = $resource('/api/v1/manageTeam:tId', {tId:"@id"},{
            update:{method:'PUT', isArray:false}
        });

        return{
            addTeam: function (team) {
                var dfd = $q.defer();

                var sendData = {
                    team:team,
                    user:bIdentity.currentUser
                };

                teamApi.save({data:sendData}, function () {
                        dfd.resolve(true);
                    }, function () {
                        dfd.reject(false);
                    });

                return dfd.promise;
            },

            updateTeam: function (team) {
                var dfd = $q.defer();
                var sendData = {
                    team:team,
                    user:bIdentity.currentUser
                };
                var teamStatus = new teamApi(sendData);

                teamStatus.$update()
                    .then(function () {
                        dfd.resolve(true);
                    }, function () {
                        dfd.reject(false);
                    });

                return dfd.promise;
            },

            logOut: function () {
                var dfd = $q.defer();
                $http.post('/logout', {logout:true})
                    .then(function () {
                        bIdentity.currentUser = undefined;
                        dfd.resolve();
                    });

                return dfd.promise;
            }
        }
    }
);