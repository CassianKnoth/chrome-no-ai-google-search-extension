"use strict";
// const params = new URLSearchParams(location.search);
// const q = params.get('q');
// if (params.get('noAiParamLabel') === '1') {
// 	location.replace('https://www.google.com/search?' + params.toString());
// } else {
// 	if (q) {
// 		const noAiAppendixRegex = /\+-ai$/i;
// 		const hasNoAiAppendix = !noAiAppendixRegex.test(q);
// 		if (hasNoAiAppendix) {
// 			params.set('q', q + ' -ai');
// 		}
// 	}
// 	params.set(noAiParamLabel, '1');
// 	location.replace('https://www.google.com/search?' + params.toString());
// }
// const redirectHandler = () => {
// 	const noAiParamLabel = 'noAiExecuted';
// 	const params = new URLSearchParams(location.search);
// 	const originalQ = params.get('q');
// 	const url = new URL('https://www.google.com/search?' + originalQ);
// 	console.log('url: ', url);
// 	// Skip DNR processing entirely - go DIRECTLY to final URL
// 	if (url.searchParams.has(noAiParamLabel)) {
// 		console.log('HAS noAiParamLabel');
// 		// Use window.location.href = ... NOT replace(), to avoid triggering DNR
// 		window.location.href = url.toString();
// 		return;
// 	}
// 	// First time - modify query
// 	const q = url.searchParams.get('q');
// 	if (q && !q.includes(' -ai')) {
// 		url.searchParams.set('q', q + ' -ai');
// 	}
// 	url.searchParams.set(noAiParamLabel, 'true');
// 	// Critical: Use href assignment, NOT replace()
// 	window.location.href = url.toString();
// };
// redirectHandler();
const params = new URLSearchParams(location.search);
console.log('params', params);
const q = params.get('q');
console.log('q', q);
const newUrl = new URL('https://www.google.com/search?' + q);
console.log('newUrl', newUrl);
newUrl.searchParams.set('q', `${q} -ai`);
console.log('newUrl updated', newUrl);
window.location.href = newUrl.toString();
