"use strict";

const AUTH = {
    key: "KXsWgHPzKNpMSXJtHBEy",
    secret: "EMAGVRQHJCJkplwenadJGVtbxMVKXFyh"
};

angular.module("groowie", [
    // les dépendances externes
    "ui.router", "ngResource"
])

.config(function($stateProvider, $urlRouterProvider) {
    var states = [{
            name: "home",
            url: "/home",
            component: "home"
        },
        {
            name: "artist",
            url: '/artist:id',

            component: "artist",


        },
        {
            name: "realisation",
            url: "/realisation:id",
            component: "realisation"
        }, {
            name: "label",
            url: "/label:id",
            component: "label"
        }
        // {
        //     name: "pageNotFound",
        // }
    ];
    $urlRouterProvider.otherwise("/404");
    states.forEach(function(state) {
        $stateProvider.state(state);
    })
})

;