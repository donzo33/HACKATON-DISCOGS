"use strict";

angular.module("groowie").component("header", {
    templateUrl: "app/components/header/header.html",
    controller: Header
})

function Header() {
    this.links = ["home", "artist", "label"];
}