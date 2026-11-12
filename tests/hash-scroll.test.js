import { expect, test } from '@playwright/test';

test('back after forward to a hash link restores the scroll position', async ({ page }) => {
	await page.goto('/');
	await page.click('#go');
	await page.waitForURL('/#target');
	const target_y = await page.evaluate(() => scrollY);

	await page.goBack();
	await page.waitForURL('/');
	await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);

	await page.goForward();
	await page.waitForURL('/#target');
	await expect.poll(() => page.evaluate(() => scrollY)).toBe(target_y);

	await page.goBack();
	await page.waitForURL('/');
	// fails in WebKit: the page stays at #target
	await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
});
