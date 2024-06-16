// ==UserScript==
// @name         UTS Library Redirect
// @namespace    https://github.com/yujianke100/University-Library-Redirect/tree/UTS
// @version      1.1.4
// @description  Automatically redirect from ACM, IEEE, Springer and ScienceDirect to UTS Library.
// @description:en  Automatically redirect from ACM, IEEE, Springer and ScienceDirect to UTS Library.
// @description:zh-CN  自动将ACM、IEEE、Springer和ScienceDirect网站重定向至UTS图书馆。
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
    var proxySuffix = ".ezproxy.lib.uts.edu.au";
 
    // Function to check if the URL has already been redirected
    function isRedirected(url) {
        return url.includes(proxySuffix) || url.includes("redirected=true") || url.includes("%3Fredirected%3Dtrue") || url.includes("arnumber=");
    }

    if (!isRedirected(currentURL)) {
        if (currentURL.startsWith("https://dl.acm.org/")) {
            newURL = currentURL.replace("https://dl.acm.org/", "https://dl-acm-org" + proxySuffix + "/") + "?redirected=true";
        } else if (currentURL.startsWith("https://ieeexplore.ieee.org/")) {
            newURL = currentURL.replace("https://ieeexplore.ieee.org/", "https://ieeexplore-ieee-org" + proxySuffix + "/") + "?redirected=true";
        } else if (currentURL.startsWith("https://link.springer.com/")) {
            newURL = currentURL.replace("https://link.springer.com/", "https://link-springer-com" + proxySuffix + "/") + "?redirected=true";
        } else if (currentURL.startsWith("https://www.sciencedirect.com/")) {
            newURL = currentURL.replace("https://www.sciencedirect.com/", "https://www-sciencedirect-com" + proxySuffix + "/") + "?redirected=true";
        }

        if (newURL) {
            window.location.href = newURL;
        }
    }
})();
