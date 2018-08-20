// ==UserScript==
// @name         GitHub - Clone to SourceTree button
// @version      1
// @description  Adds a "Clone to SourceTree" button to the clone dialog on GitHub
// @author       Yani
// @respository  https://github.com/yanikore/userscript-github-clone-in-sourcetree
// @updateURL    https://github.com/yanikore/userscript-github-clone-in-sourcetree/raw/master/github-clone-in-sourcetree.user.js
// @match        https://github.com/*
// @require      https://code.jquery.com/jquery-3.3.1.slim.min.js
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    var $ = window.jQuery;

    $(function () {
        var $modal = $('div.get-repo-modal-options');
        if($modal){
            $modal.find('a.get-repo-btn').parent().append(
                $($modal.find('a.get-repo-btn')[0]).clone()
                    .css('width', '100%')
                    .removeClass('js-get-repo')
                    .text('Clone in SourceTree')
                    .attr('aria-label', $modal.find('a.get-repo-btn').attr('aria-label').replace('GitHub Desktop', 'SourceTree'))
                    .attr('href', 'sourcetree://cloneRepo/' + $('.clone-options .js-url-field').val())
            );
        }
    });
})();