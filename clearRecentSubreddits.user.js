// ==UserScript==
// @name		clearRecentSubreddits
// @namespace	https://reddit.com/
// @version		1.0
// @description	Deletes 'recent-subreddits-store' from localStorage on reddit.com
// @author		Felicity Iris (github.com/Felicityiris)
// @match		https://www.reddit.com/*
// @grant		none
// @run-at		document-start
// @license		GPL-3.0
// @homepage	https://github.com/FelicityIris/clear-recent-subreddits
// @downloadURL	https://raw.githubusercontent.com/FelicityIris/clear-recent-subreddits/refs/heads/main/clearRecentSubreddits.user.js
// @updateURL	https://raw.githubusercontent.com/FelicityIris/clear-recent-subreddits/refs/heads/main/clearRecentSubreddits.user.js
// ==/UserScript==

(function() {
    'use strict';

    const key = 'recent-subreddits-store';

    const clearKey = () => {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key);
            console.log(`Removed ${key}`);
        }
    };

    // Initial clear after DOM load
    window.addEventListener('DOMContentLoaded', () => {
        clearKey();

        // Re-check periodically in case Reddit resets it
        setInterval(clearKey, 1000); // Adjust interval if needed
    });
})();
