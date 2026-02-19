"use strict";
(function () {
    if (new URLSearchParams(location.search).has('noai')) {
        return;
    }
    const url = new URL(location.href);
    const q = url.searchParams.get('q');
    url.searchParams.set('q', `${q} -ai`);
    url.searchParams.set('noai', 'true');
    location.replace(url.toString());
})();
