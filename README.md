# Safari doesn't restore scroll after going forward to a hash link

1. Run `pnpm install`, then `pnpm exec playwright install webkit chromium`
2. Run `pnpm test`. It runs the same test in WebKit and Chromium:
   click a link to `#target`, go back, go forward, go back.
3. WebKit fails on the last step: the page stays at `#target` instead of returning to the top. Chromium passes.

To check by hand, run `pnpm dev --host` and open the page in Safari (iOS or the iOS simulator), then follow the same steps.
