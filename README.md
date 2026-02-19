# Google Chrome extension for auto appending " -ai" to searches

Are you tired of the forced automatic ai response Google throws at you? Get rid of it with this small extension!

> 💡 You can prevent the ai answer by adding "-ai" to your search manually. This extension uses that fact and automates stuff for you (see [What it does](#-what-it-does)).

## 📚 Contents

- [What it does](#-what-it-does)
- [Limitations](#-limitations)
- [Install](#-install)

## 💡 What it does

So far I have not found any configuration via which you can prevent the ai answer from a Google search... (if you did, let me know!) But it is possible to add "-ai" to your search input and ta-da, it's gone!

This extension checks the `q` parameter of a search request and looks if it ends with " -ai" (case insensitive). If "- ai" is in fact not the end of the string, it will be added for you automatically ✨

Furthermore, the extension will add " -ai" to the end of your search input while typing as well, if it is not present yet.

## 🚧 Limitations

If you start your search not from a Google domain (e. g. typing your search input into the address bar or in the input field on a new chrome tab) the functionality will still work and " -ai" is appended...

But as a second search request: The first search request without " -ai" is initiated, the extension detects the missing " -ai" in th `q` param, build a new search url with modified `q` param and directs the browser there.

This still results in the desired user experience but can't guarantee that a Google server didn't calculate an ai answer still using up resources unecessarily...

However, if you start your search with the Google input element, where " -ai" is added automatically while typing, you will send a no-ai-request directly without any modified redirects.

> 💡 This whole thing would have been cleaner if it was possible to modify the original request by modifying (not iverwriting) the original value for the `q` header directly, but it seems this is not possible with Google's `manifest v3`... (if it is possible, let me know!)

## 🚀 Install

This extension is _not_ available in the Chrome Web Store, you need to download the `chrome-no-ai-google-search-extension` folder from this repo, unpack it and load it yourself:

> 💡 Instead of downloading the whole repo you can go to Github's web editor (change `github.com` to `github.dev` in the repo's url or hit the preiod key) where you can right click the specific folder you want to download.

- In chrome, navigate to `chrome://extensions/`
- Activate `Developer mode` (last I checked top right corner)
- Click the `Load unpacked` button (last I checked top left corner)
- Select the downloaded, unpacked `chrome-no-ai-google-search-extension` folder
- Maybe need to activate it once it appears in the list

If you want to develop it further yourself:

1. 📄 Clone repo

HTTPS

```bash
git clone https://github.com/CassianKnoth/chrome-no-ai-google-search-extension.git
```

SSH

```bash
git clone git@github.com:CassianKnoth/chrome-no-ai-google-search-extension.git
```

2. 💽 Install dependencies

```bash
npm i
```

3. ➡️ Navigate into project

```bash
cd chrome-no-ai-google-search-extension
```

4. B🏗️ uild extension (after making changes)

```bash
npm run build
```
