// ==UserScript==
// @name         UTS Redirect ACM and IEEE
// @namespace    https://github.com/yujianke100/UTS-Paper-Redirect
// @version      1.0
// @description  Automatically redirect from ACM and IEEE to UTS Library.
// @author       Jianke Yu
// @match        https://dl.acm.org/doi/*
// @match        https://ieeexplore.ieee.org/document/*
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    var currentURL = window.location.href;
    var newURL;

    if (currentURL.startsWith("https://dl.acm.org/doi/")) {
        newURL = currentURL.replace("https://dl.acm.org/", "https://dl-acm-org.ezproxy.lib.uts.edu.au/");
        window.location.href = newURL;
    }

    else if (currentURL.startsWith("https://ieeexplore.ieee.org/document")) {
        newURL = currentURL.replace("https://ieeexplore.ieee.org/document", "https://ieeexplore-ieee-org.ezproxy.lib.uts.edu.au/document");
        window.location.href = newURL;
    }
})();
