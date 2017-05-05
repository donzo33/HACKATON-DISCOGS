"use strict";

angular.module("groowie").component("label", {
    templateUrl: "app/components/label/label.html",
    controller: LABEL
})

function LABEL($scope, $resource, $stateParams) {

    //console.log($stateParams.id)
    var labelInfo = [],
        labelRelease = [];
    //on prend les info du label
    //console.log($stateParams.id)
    $resource("https://api.discogs.com/labels/" + $stateParams.id, AUTH).get().$promise
        .then(function(response) {
            labelInfo.push(response);
            // console.log(labelInfo[0]);
        })


    //on prend les info du label
    //console.log($stateParams.id)
    $resource("https://api.discogs.com/labels/" + $stateParams.id + "/releases", AUTH).get().$promise
        .then(function(response) {
            // console.log(labelInfo[0]);
            $scope.labelRelease = response.releases;

        })




    $scope.labelInfo = labelInfo;

};