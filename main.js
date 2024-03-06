// ==UserScript==
// @name         UNSW Library Redirect
// @namespace    https://github.com/yujianke100/University-Library-Redirect/tree/UNSW
// @version      1.0.1
// @description  Automatically redirect from ACM, IEEE, Springer and ScienceDirect to UNSW Library.
// @author       Jianke Yu
// @match        https://dl.acm.org/*
// @match        https://ieeexplore.ieee.org/*
// @match        https://link.springer.com/*
// @match        https://www.sciencedirect.com/*
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    var currentURL = window.location.href;
    var newURL;

    if (currentURL.startsWith("https://dl.acm.org/")) {
        newURL = currentURL.replace("https://dl.acm.org/", "https://dl-acm-org.wwwproxy1.library.unsw.edu.au/");
    }

    else if (currentURL.startsWith("https://ieeexplore.ieee.org/")) {
        newURL = currentURL.replace("https://ieeexplore.ieee.org/", "https://ieeexplore-ieee-org.wwwproxy1.library.unsw.edu.au/");
    }
    else if (currentURL.startsWith("https://link.springer.com/")) {
        newURL = currentURL.replace("https://link.springer.com/", "https://link-springer-com.wwwproxy1.library.unsw.edu.au/");
    }
    else if (currentURL.startsWith("https://www.sciencedirect.com/")) {
        newURL = currentURL.replace("https://www.sciencedirect.com/", "https://www-sciencedirect-com.wwwproxy1.library.unsw.edu.au/");
    }
    window.location.href = newURL;
})();
