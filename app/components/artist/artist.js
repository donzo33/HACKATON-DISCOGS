"use strict";
angular.module("groowie").component("artist", {
    templateUrl: "app/components/artist/artist.html",
    controller: ARTIST
})

function ARTIST($scope, $resource, $stateParams) {
    console.log($stateParams.id)

}