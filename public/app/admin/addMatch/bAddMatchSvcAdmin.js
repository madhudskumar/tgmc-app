bplApp.factory('bAddMatchSvcAdmin',
    function ($resource, bIdentity, $q) {
        var matchFixtures = $resource('/api/v1/matchFixtures:mId' , {mId:"@id"});

        return{
            addMatch: function (match) {
                var dfd = $q.defer();

                var newFixture = {
                    teamOne:JSON.parse(match.teamOne)._id,
                    teamTwo:JSON.parse(match.teamTwo)._id,
                    round:match.round,
                    matchDate:match.matchDate,
                    matchTime:match.matchTime
                };

                console.log(newFixture);

                var sendData = {
                    match:newFixture,
                    user:bIdentity.currentUser
                };

                matchFixtures.save({data:sendData}, function () {
                    dfd.resolve(true);
                }, function () {
                    dfd.reject(false);
                });

                return dfd.promise;
            }
        }
    }
);