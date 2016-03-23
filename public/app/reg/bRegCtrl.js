bplApp.controller('bRegCtrl',
    function ($scope, ngProgressFactory, $timeout) {
        $scope.contacts = [
            {img:"/images/cts/v.png", name:"Vinod Kumar S V ", phn:" 8792761876"},
            {img:"/images/cts/mm.png", name:"Manoj S Banakar ", phn:" 8197387768"},
            {img:"/images/cts/p.png", name:"Parikshith N K ", phn:" 9738592954"},
            {img:"/images/cts/vk.png", name:"Vivek Kadam ", phn:" 9742833468"},
            {img:"/images/cts/mk.png", name:"Maruthi K M ", phn:" 8892804139"},
            {img:"/images/cts/s.png", name:"Shashi Kumar ", phn:" 9538570834"},
            {img:"/images/cts/m.png", name:"Madhu Kumar D S ", phn:" 8553680157"}
        ];

        $scope.ngProgress = ngProgressFactory.createInstance();
        $scope.ngProgress.setColor('red');
        $scope.ngProgress.set(70);

        $timeout(function () {
            $scope.ngProgress.complete();
        },2000);
    }
);