import { noAiParamLabel } from './redirect';

chrome.runtime.onInstalled.addListener(async () => {
	await chrome.declarativeNetRequest.updateDynamicRules({
		removeRuleIds: [1],
		addRules: [
			{
				id: 1,
				priority: 1,
				action: {
					type: 'redirect',
					redirect: {
						regexSubstitution:
							'chrome-extension://' +
							chrome.runtime.id +
							'/helper-redirect.html?\\1',
					},
				},
				condition: {
					// regexFilter: '^https://www\\.google\\.com/search\\?(.*)',
					regexFilter: `^https?://[^/]*google\\.[^/]+/search\\?.*&${noAiParamLabel}=true.*`,
					resourceTypes: ['main_frame'],
				},
			},
		],
	});
});
