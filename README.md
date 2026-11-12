# Safari doesn't restore scroll after going forward to a hash link

1. Run `pnpm install`, then `pnpm exec playwright install webkit chromium`
2. Run `pnpm test`. It runs the same test in WebKit and Chromium:
   click a link to `#target`, go back, go forward, go back.
3. WebKit fails on the last step: the page stays at `#target` instead of returning to the top. Chromium passes.

## In the iOS simulator

On a Mac with Xcode and an iOS runtime installed (Xcode > Settings > Components):

1. Run `pnpm dev`
2. Run `open -a Simulator` to start an iPhone
3. Run `xcrun simctl openurl booted http://localhost:5173`
4. Tap "Go to #target", then use Safari's back, forward, back buttons.
5. After the last back, the URL loses `#target` but the page stays scrolled down.

If another dev server is already using port 5173, open `http://127.0.0.1:5173` instead.
