// spec: ECS_Test_Plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Discovery and Search', () => {
  test('Search Results Filtering and Sorting', async ({ page }) => {
    // Navigate to ECS homepage to start the search results filtering and sorting test
    await page.goto('https://shopecs.com');

    // Close the newsletter popup to access the search functionality
    await page.getByRole('button', { name: '×' }).click();

    // Enter "shoes" into the search input field
    await page.getByRole('combobox', { name: 'Search' }).fill('shoes');

    // Click the search button to perform the search for "shoes"
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    // Click the Filter button to open the filter options
    await page.locator('#FacetSortForm').getByRole('img').filter({ hasText: /^$/ }).click();

    // Click the Color filter button to expand the color options
    await page.getByRole('button', { name: 'Color (0 selected)' }).click();

    // Select the Black color filter to filter shoes by black color
    await page.getByRole('checkbox', { name: 'Black (399 item(s))' }).click();

    // Click the sort dropdown to see sorting options
    await page.locator('.custom-select-box-icon > .icon').first().click();

    // Select the Price, low to high sorting option
    await page.locator('#FacetSortForm').getByText('Price, low to high').click();

    // Click the list view button to change from grid to list view
    await page.locator('facet-filters-form').filter({ hasText: 'Filter Sort by: Relevance' }).locator('#Capa_1').click();

    // Click the Load More button to test pagination
    await page.locator('#loadmore').click();
  });
});