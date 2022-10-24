# Cemantix Helper

This project is meant to help find a word for Cemantix game (https://cemantix.certitudes.org/)

## How to use it

1. Add a browser extension to inject javascript into a page (tested with [Javascript Extension](https://addons.mozilla.org/en-US/firefox/addon/javascript/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) on Firefox).

2. Go to https://cemantix.certitudes.org/ and add this following code into the extension to run it.

```javascript
const script = document.createElement('script');
          
script.src = "https://cdn.jsdelivr.net/gh/qroques/cemantixHelper/src/app.js";
          
document.head.appendChild(script)
```

3. Refresh page to run the script. At this point a ne button should display on the page :

![Help me button](./helpMeButton.png)