"use strict";
angular.module("groowie").component("artist", {
    templateUrl: "app/components/artist/artist.html",
    controller: ARTIST
})

function ARTIST($scope, $resource, $stateParams) {
    console.log($stateParams.id)
    var artistInfo = [],
        artistRelease = [];
    //on prend les info de l'artiste
    $resource("https://api.discogs.com/artists/" + $stateParams.id, AUTH).get().$promise
        .then(function(response) {
            artistInfo.push(response);
            console.log(artistInfo);

        })

    //on prend les release de l'artiste
    $resource("https://api.discogs.com/artists/" + $stateParams.id + "/releases", AUTH).get().$promise
        .then(function(response) {
            artistRelease.push(response);

            console.log(response.releases)
            $scope.artistRelease = response.releases;




        });
    $scope.artistInfo = artistInfo;



}