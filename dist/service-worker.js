"use strict";
chrome.webRequest.onBeforeRequest.addListener((details) => {
    const url = new URL(details.url);
    const markerParameter = 'noAiExecuted';
    const q = url.searchParams.get('q');
    if (!q || url.searchParams.get(markerParameter) === '1') {
        return {};
    }
    const noAiAppendixRegex = /\+-ai$/i;
    const hasNoAiAppendix = !noAiAppendixRegex.test(q);
    if (hasNoAiAppendix) {
        url.searchParams.set('q', q + ' -AI');
    }
    url.searchParams.set(markerParameter, '1');
    return { redirectUrl: url.toString() };
}, {
    urls: ['https://www.google.com/search*'],
    types: ['main_frame'],
}, ['blocking']);
