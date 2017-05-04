"use strict";

const AUTH = { key: "KXsWgHPzKNpMSXJtHBEy", secret: "EMAGVRQHJCJkplwenadJGVtbxMVKXFyh" };

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
            url: "/artist",
            component: "artist"
        },
        {
            name: "realisation",
            url: "/realisation",
            component: "realisation"
        }, {
            name: "label",
            url: "/label",
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