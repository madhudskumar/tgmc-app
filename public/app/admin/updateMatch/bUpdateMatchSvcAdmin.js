bplApp.factory('bUpdateMatchSvcAdmin',
    function bUpdateMatchSvcAdmin ($resource, $q, bIdentity) {
        var matchAdminApi = $resource('/api/v1/team/:tId', {id:"@id"});

        return{
            updateMatch: function (curMatch) {
                var dfd = $q.defer();

                var matchData = {
                    teamOne:curMatch.teamOne._id,
                    teamTwo:curMatch.teamTwo._id,
                    round:curMatch.round,
                    matchDate:curMatch.newMatchDate,
                    matchTime:curMatch.newMatchTime
                };

                var data = {
                    user:bIdentity.currentUser,
                    newData:matchData
                };

                console.log(data);

                var updateMatch = new matchAdminApi(data);

                updateMatch.$save({tId:curMatch._id})
                    .then(function () {
                        dfd.resolve(true);
                    }, function () {
                        dfd.reject(false);
                    });

                return dfd.promise;
            },

            deleteMatch: function (match) {
                var dfd = $q.defer();
                var delMatch = new matchAdminApi(bIdentity.currentUser);

                delMatch.$delete({tId:match._id})
                    .then(function () {
                        dfd.resolve(true);
                    }, function () {
                        dfd.reject(false);
                    });

                return dfd.promise;
            }
        }
    }
);