import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: 'tests',
	webServer: { command: 'pnpm dev --port 4173 --strictPort', port: 4173 },
	use: { baseURL: 'http://localhost:4173' },
	projects: [
		{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }
	]
});
