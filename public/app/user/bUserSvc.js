bplApp.factory('bUserSvc', function ($resource, bUser, bIdentity, $q, $http) {
    var user = $resource('/api/v1/user:uId', {uId:"@id"});
    
    return{
        authUser: function (username, password) {
            var dfd = $q.defer();

            $http.post('/login', {username:username, password:password})
                .then(function (response) {
                        if(response.data.success){
                            var user = new bUser();
                            angular.extend(user, response.data.user);
                            bIdentity.currentUser = user;
                            dfd.resolve(true);
                        }else{
                            dfd.resolve(false);
                        }
                    }
                );

            return dfd.promise;
        },
        authUserForRoute: function () {
            if(bIdentity.isAuthenticated()){
                return true
            }else{
                return $q.reject('not Authorised');
            }
        }
    }
});