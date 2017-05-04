"use strict";

angular.module("groowie").component("home", {
    templateUrl: "app/components/home/home.html",
    controller: home


})


//on utilise la fonction HTTP request d'angular 

function home($scope, $resource) {;
    var artistList = [],
        artistReleases = [],
        idArtists = [1, 99, 40, 14, 900, 2, 30, 6574, 3255, 5];

    for (let i = 0; i < idArtists.length; i++) {
        $resource("https://api.discogs.com/artists/" + idArtists[i], AUTH).get().$promise
            .then(function(response) {
                artistList.push(response);
            });

        $resource("https://api.discogs.com/artists/" + idArtists[i] + "/releases", AUTH).get().$promise
            .then(function(response) {
                artistReleases.push(response);
                console.log(artistReleases);
            });

        //artistRelease = $resource("https://api.discogs.com/artists/" + idArtists[i] + "/releases", AUTH);
        //search For artist 

        //var artistLabel =*/

    }
    $scope.artistList = artistList;
    $scope.artistReleases = artistReleases;
    //search For artistRelease

    // artistRelease.get().$promise
    //     .then(function(response) {
    //         $scope.artRels = response.releases;
    //         // console.log(response)

    //     });


};