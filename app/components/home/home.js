"use strict";

angular.module("groowie").component("home", {
    templateUrl: "app/components/home/home.html",
    controller: home


})


//on utilise la fonction HTTP request d'angular 

function home($scope, $resource) {;

    var artistHome = $resource("https://api.discogs.com/artists/1000");
    var artistRelease = $resource("https://api.discogs.com/artists/1000/releases");
    //var artistLabel =*/



    //&token=CKbUrmUOMAiRpfxvebaRwXZRMhiVmkAVjPGbZxJK

    //search For Artist 

    artistHome.get().$promise
        .then(function(response) {

            //console.log(response);
            $scope.artName = response.name;
        });


    //search For artistLabel

    artistRelease.get().$promise
        .then(function(response) {

            console.log(response);
            $scope.artLab = response;
        });


};