# Bug reproduction instructions

1. Run a local server (ex [http-server](https://github.com/http-party/http-server)), hosting [`./index.html`](./index.html)
1. Open Chrome
1. Open DevTools
1. Navigate to the hosted `index.html` (ex if you used http-server with default settings, `http://localhost:8080/index.html`)
	* The debugger in `client.js` has paused execution
1. Go to Network panel
1. Set _throttle_ to 1 Kbps
1. Click the play button under the address bar to resume execution
1. Wait ~30 seconds
1. Kill the local server
1. Switch to DevTools’ Network panel
1. Remove the throttle (“no throttle”)
1. Switch to DevTools’ Console panel
1. Notice the error printed in the console cites `client.js` but no error citing `sw.js`
