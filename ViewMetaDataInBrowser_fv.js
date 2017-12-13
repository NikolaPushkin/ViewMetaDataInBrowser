// ==UserScript==
// @name         ViewMetaDataInBrowser_fv
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// @require  http://code.jquery.com/jquery-3.2.1.js

// ==/UserScript==

(function() {
    'use strict';
jQuery(document).ready(function() {
jQuery('body').prepend('<div class="BlockViewMeta" style="background-color: #b8f593;text-align: center;"></div>');
jQuery('.BlockViewMeta').append('<p>DESCR: '+jQuery('meta[name="description"]').attr("content")+'</p>');
jQuery('.BlockViewMeta').append('<p>KEYW: '+jQuery('meta[name="keywords"]').attr("content")+'</p>');
});

})();
