bplApp.factory('bUser',
    function ($resource) {
        var userResource = $resource('/api/users:id', {id:"@id"},{
            update:{method:'PUT', isArray:false}
        });

        return userResource;
    }
);