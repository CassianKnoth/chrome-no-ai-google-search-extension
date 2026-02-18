"use strict";
// import { noAiParamLabel } from './redirect';
// // chrome.runtime.onInstalled.addListener(async () => {
// // 	await chrome.declarativeNetRequest.updateDynamicRules({
// // 		removeRuleIds: [1],
// // 		addRules: [
// // 			{
// // 				id: 1,
// // 				priority: 1,
// // 				action: {
// // 					type: 'redirect',
// // 					redirect: {
// // 						regexSubstitution:
// // 							'chrome-extension://' +
// // 							chrome.runtime.id +
// // 							'/helper-redirect.html?\\1',
// // 					},
// // 				},
// // 				condition: {
// // 					// regexFilter: '^https://www\\.google\\.com/search\\?(.*)',
// // 					// regexFilter: `^https?://[^/]*google\\.[^/]+/search\\?.*&${noAiParamLabel}=true.*`,
// // 					regexFilter: `^https://www\.google\.com/search\?(?:(?!${noAiParamLabel}=).)*$`,
// // 					resourceTypes: ['main_frame'],
// // 				},
// // 			},
// // 		],
// // 	});
// // });
// // background.ts - TOP LEVEL (not in onInstalled)
// const EXTENSION_ID = chrome.runtime.id; // ✅ Safe here, worker is running
// async function updateRules() {
// 	await chrome.declarativeNetRequest.updateDynamicRules({
// 		removeRuleIds: [1],
// 		addRules: [
// 			{
// 				id: 1,
// 				priority: 1,
// 				action: {
// 					type: 'redirect',
// 					redirect: {
// 						regexSubstitution: `chrome-extension://${
// 							EXTENSION_ID
// 						}/helper-redirect.html?\\1`,
// 					},
// 				},
// 				condition: {
// 					regexFilter: `^https://www\\.google\\.com/search\\?(?:(?!${noAiParamLabel}=).)*$`,
// 					resourceTypes: ['main_frame'],
// 				},
// 			},
// 		],
// 	});
// }
// // TOP LEVEL - runs immediately when service worker starts
// updateRules();
// chrome.runtime.onInstalled.addListener(updateRules);
// chrome.runtime.onStartup.addListener(updateRules);
console.log('Service worker loaded');
console.log('Extension ID:', chrome.runtime.id);
if (chrome.declarativeNetRequest) {
    console.log('DNR available');
    // Hardcoded values - no imports
    // const noAiParamLabel = 'noai';
    const EXTENSION_ID = chrome.runtime.id;
    async function updateRules() {
        try {
            await chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds: [1],
                addRules: [
                    {
                        id: 1,
                        priority: 1,
                        action: {
                            type: 'redirect',
                            redirect: {
                                regexSubstitution: `chrome-extension://${EXTENSION_ID}/helper-redirect.html?\\1`,
                            },
                        },
                        condition: {
                            regexFilter: '^https://www\\.google\\.com/search\\?(.*)',
                            resourceTypes: ['main_frame'],
                        },
                    },
                ],
            });
            console.log('DNR rules registered successfully');
        }
        catch (e) {
            console.error('DNR rule registration failed:', e);
        }
    }
    updateRules();
}
else {
    console.error('Missing "declarativeNetRequest" permission');
}
