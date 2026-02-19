const noAiRegex = / -ai$/i;

const setupInputListener = (input: HTMLTextAreaElement) => {
	input.addEventListener('input', (e) => {
		const target = e.target as HTMLTextAreaElement;
		const value = target.value;
		if (!noAiRegex.test(value)) {
			target.value = value + ' -ai';
			target.dispatchEvent(new Event('input', { bubbles: true })); // Trigger Google's handlers

			// prevent jumping to the end of the input string when " -ai" is added
			// keep uninterrupted typing
			const selectionRangeIndex = target.value.length - 4;
			input.setSelectionRange(selectionRangeIndex, selectionRangeIndex);
		}
	});
	console.log('Listener attached to Google input');
};

const initSearchObserver = () => {
	const observer = new MutationObserver(() => {
		const input = document.querySelector(
			'form[action="/search"] textarea',
		) as HTMLTextAreaElement | null;

		if (input && !input.dataset.listenerAttached) {
			input.dataset.listenerAttached = 'true'; // Prevent duplicate listeners
			setupInputListener(input);
		}
	});

	observer.observe(document.body || document.documentElement, {
		childList: true,
		subtree: true,
	});
};

(function () {
	const url = new URL(location.href);
	const q = url.searchParams.get('q');

	if (!q || noAiRegex.test(q)) {
		if (document.body) {
			initSearchObserver();
		} else {
			document.addEventListener('DOMContentLoaded', initSearchObserver);
		}
		return;
	} else {
		url.searchParams.set('q', `${q} -ai`);
		chrome.runtime.sendMessage({ action: 'redirect', url: url.toString() });
	}
})();
