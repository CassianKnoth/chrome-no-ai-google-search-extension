"use strict";
const params = new URLSearchParams(location.search);
const q = params.get('q');
if (params.get('noAiExecuted') === '1') {
    location.replace('https://www.google.com/search?' + params.toString());
}
else {
    if (q) {
        const noAiAppendixRegex = /\+-ai$/i;
        const hasNoAiAppendix = !noAiAppendixRegex.test(q);
        if (hasNoAiAppendix) {
            params.set('q', q + ' -AI');
        }
    }
    params.set('noAiExecuted', '1');
    location.replace('https://www.google.com/search?' + params.toString());
}
