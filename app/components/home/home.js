"use strict";

angular.module("groowie").component("home", {
    templateUrl: "app/components/home/home.html",
    controller: home


})


//on utilise la fonction HTTP request d'angular 

function home($scope, $resource) {;

    var artistHome = $resource("https://api.discogs.com/artists/1", AUTH);
    var artistRelease = $resource("https://api.discogs.com/artists/5000/releases", AUTH);
    //var artistLabel =*/



    //&token=CKbUrmUOMAiRpfxvebaRwXZRMhiVmkAVjPGbZxJK

    //search For artist 

    artistHome.get().$promise
        .then(function(response) {
            $scope.artName = response.name;
            // console.log(response);
        });


    //search For artistRelease

    artistRelease.get().$promise
        .then(function(response) {
            $scope.artRels = response.releases;
            console.log(response)

        });


};