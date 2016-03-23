bplApp.controller('bUserCtrl',
    function bUserCtrl ($scope, bUserSvc, $location) {
        $scope.authUser = function (username, pwd) {
            bUserSvc.authUser(username,pwd)
                .then(function (success) {
                        if(success){
                            console.log('logged in');
                            $location.path('/admin/teams')
                        }else{
                        }
                    }
                );
        }
    }
);