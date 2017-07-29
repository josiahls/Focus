// ==UserScript==
// @name        Focus
// @namespace   https://github.com/josiahls
// @description Script turns off displays for specific websites to eliminate
//                     distractions
// @include     https://*.youtube.*
// @version     1
// @grant       none
// ==/UserScript==
(function() {
    'use strict';

    var elementIdNames = [
        "feed-main-what_to_watch",
        "browse-items-primary",
        "watch7-sidebar"
    ];

    setInterval(function(){elementIdNames.forEach(myFunction);}, 1000);
})();

function myFunction(elementIdName) {
    try {
        var exclusion = window.location.pathname;
        if (exclusion.indexOf("user") === -1) {
            document.getElementById(elementIdName).style.display = 'none';
        }
    } catch (e) {
        //alert("error");
    }
}
