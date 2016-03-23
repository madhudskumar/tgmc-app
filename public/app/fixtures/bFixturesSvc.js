bplApp.factory('bFixturesSvc'
    , function ($resource, $q) {
        var matches = $resource('/api/v1/fixtures:fId', {fId:"@id"},{
            get:{method:'GET', isArray:true}
        });

        return{
            getData: function () {
                var dfd = $q.defer();

                matches.get(function (response) {
                    dfd.resolve(response);
                }, function () {
                    dfd.reject(false);
                });

                return dfd.promise;
            }
        }
    }
);