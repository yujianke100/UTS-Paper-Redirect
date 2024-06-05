// ==UserScript==
// @name         UNSW Library Redirect
// @name:en      UNSW Library Redirect
// @name:zh-CN   重定向至UNSW图书馆
// @namespace    https://github.com/yujianke100/University-Library-Redirect/tree/UNSW
// @version      1.1.1
// @description  Automatically redirect from ACM, IEEE, Springer and ScienceDirect to UNSW Library.
// @description:en  Automatically redirect from ACM, IEEE, Springer and ScienceDirect to UNSW Library.
// @description:zh  自动将ACM、IEEE、Springer和ScienceDirect网站重定向至UNSW图书馆。
// @author       Jianke Yu
// @match        https://dl.acm.org/*
// @match        https://ieeexplore.ieee.org/*
// @match        https://link.springer.com/*
// @match        https://www.sciencedirect.com/*
// @grant        none
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/489131/UNSW%20Library%20Redirect.user.js
// @updateURL https://update.greasyfork.org/scripts/489131/UNSW%20Library%20Redirect.meta.js
// ==/UserScript==

(function() {
    'use strict';

    var currentURL = window.location.href;
    var newURL;
    var proxySuffix = ".wwwproxy1.library.unsw.edu.au";

    if (currentURL.startsWith("https://dl.acm.org/")) {
            newURL = currentURL.replace("https://dl.acm.org/", "https://dl-acm-org" + proxySuffix + "/") + "?redirected=true";
        } else if (currentURL.startsWith("https://ieeexplore.ieee.org/")) {
            newURL = currentURL.replace("https://ieeexplore.ieee.org/", "https://ieeexplore-ieee-org" + proxySuffix + "/") + "?redirected=true";
        } else if (currentURL.startsWith("https://link.springer.com/")) {
            newURL = currentURL.replace("https://link.springer.com/", "https://link-springer-com" + proxySuffix + "/") + "?redirected=true";
        } else if (currentURL.startsWith("https://www.sciencedirect.com/")) {
            newURL = currentURL.replace("https://www.sciencedirect.com/", "https://www-sciencedirect-com" + proxySuffix + "/") + "?redirected=true";
        }

    window.location.href = newURL;
})();
