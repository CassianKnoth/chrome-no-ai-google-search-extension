chrome.runtime.onMessage.addListener((request, sender) => {
	if (request.action === 'redirect') {
		chrome.tabs.update(sender.tab?.id, { url: request.url });
	}
});
