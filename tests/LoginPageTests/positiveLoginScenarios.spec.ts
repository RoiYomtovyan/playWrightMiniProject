import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.describe("positive login Scenarios", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
    })

    test("login with problem_user", async ({ page }) => {
        await loginPage.loginToApplication(process.env.PROBLEM_USER);
        await loginPage.validateUrl(process.env.INVENTORY_URL as string);

    })

    test("login with performance_glitch_user", async ({ page }) => {
        await loginPage.loginToApplication(process.env.PERFORMANCE_GLITCH_USER);
        await loginPage.validateUrl(process.env.INVENTORY_URL as string);

    })

})
