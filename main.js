// ==UserScript==
// @name         UTS Library Redirect
// @namespace    https://github.com/yujianke100/UTS-Paper-Redirect
// @version      1.0
// @description  Automatically redirect from ACM, IEEE and Springer to UTS Library.
// @author       Jianke Yu
// @match        https://dl.acm.org/*
// @match        https://ieeexplore.ieee.org/*
// @match        https://link.springer.com/*
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    var currentURL = window.location.href;
    var newURL;

    if (currentURL.startsWith("https://dl.acm.org/")) {
        newURL = currentURL.replace("https://dl.acm.org/", "https://dl-acm-org.ezproxy.lib.uts.edu.au/");
        window.location.href = newURL;
    }

    else if (currentURL.startsWith("https://ieeexplore.ieee.org/")) {
        newURL = currentURL.replace("https://ieeexplore.ieee.org/", "https://ieeexplore-ieee-org.ezproxy.lib.uts.edu.au/");
        window.location.href = newURL;
    }
    else if (currentURL.startsWith("https://link.springer.com/")) {
        newURL = currentURL.replace("https://link.springer.com/", "https://link-springer-com.ezproxy.lib.uts.edu.au/");
        window.location.href = newURL;
    }
})();
