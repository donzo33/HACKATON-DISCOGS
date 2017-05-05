"use strict";

angular.module("groowie").component("realisation", {
    templateUrl: "app/components/realisation/realisation.html",
    controller: REALISATION
})

function REALISATION($scope, $resource, $stateParams) {

    //console.log($stateParams.id)
    var labelInfo = [],
        labelRelease = [];
    //on prend les info des releases
    //console.log($stateParams.id)
    $resource("https://api.discogs.com/releases/" + $stateParams.id, AUTH).get().$promise
        .then(function(response) {
            labelInfo.push(response);
            console.log("ici", response);
        })






    $scope.labelInfo = labelInfo;

};