"use strict";

angular.module("groowie").component("home", {
    templateUrl: "app/components/home/home.html",
    controller: home


})


//on utilise la fonction HTTP request d'angular 

function home($scope, $resource) {;

    var artistHome = $resource("https://api.discogs.com/artists/5000");
    var artistRelease = $resource("https://api.discogs.com/artists/5000/releases");
    //var artistLabel =*/



    //&token=CKbUrmUOMAiRpfxvebaRwXZRMhiVmkAVjPGbZxJK

    //search For Artist 

    artistHome.get().$promise
        .then(function(response) {
            $scope.artName = response.name;
        });


    //search For artistLabel

    artistRelease.get().$promise
        .then(function(response) {
            $scope.artRels = response.releases;
            console.log($scope.artRels)

        });


};