bplApp.factory('bIdentity', function ($window, bUser) {
    var currentUser;
    if($window.bsUser_obj){
        console.log('logged in as ADMIN');
        currentUser = new bUser();
        angular.extend(currentUser, $window.bsUser_obj);
    }

    return{
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        },
        isAuthorised: function (role) {
            return this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});