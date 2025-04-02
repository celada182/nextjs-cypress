import { test, expect } from '@playwright/test';

test.describe('App E2E test', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('http://localhost:3000/');
      });

      test('Has title', async ({ page }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Create Next App/);
      });

      test('Navigate to First', async ({ page }) => {
        // Click First page button
        await page.getByText('First').click();
        await expect(page).toHaveURL('http://localhost:3000/first');
      });

      test('Navigate to Second', async ({ page }) => {
        // Click Second page button
        await page.getByText('Second').click();
        await expect(page).toHaveURL('http://localhost:3000/second');
      });

      test('Navigate to First and then Home', async ({ page }) => {
        // Click First page button
        await page.getByText('First').click();
        await expect(page).toHaveURL('http://localhost:3000/first');

        // Click Home page button
        await page.getByText('Home').click();
        await expect(page).toHaveURL('http://localhost:3000/home');
      });

      test('Navigate to First and then Second', async ({ page }) => {
        // Click First page button
        await page.getByText('First').click();
        await expect(page).toHaveURL('http://localhost:3000/first');

        // Click Second page button
        await page.getByText('Second').click();
        await expect(page).toHaveURL('http://localhost:3000/second');
      });

      test('Navigate to Second and then Home', async ({ page }) => {
        // Click Second page button
        await page.getByText('Second').click();
        await expect(page).toHaveURL('http://localhost:3000/second');

        // Click Home page button
        await page.getByText('Home').click();
        await expect(page).toHaveURL('http://localhost:3000/home');
      });

      test('Navigate to Second and then First', async ({ page }) => {
        // Click Second page button
        await page.getByText('Second').click();
        await expect(page).toHaveURL('http://localhost:3000/second');

        // Click Fisrt page button
        await page.getByText('First').click();
        await expect(page).toHaveURL('http://localhost:3000/first');
      });
});