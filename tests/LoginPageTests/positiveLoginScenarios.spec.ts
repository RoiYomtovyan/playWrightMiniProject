import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import Urls from '../../helpers/Urls';

test.describe("positive login Scenarios", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
    })

    test("login with problem_user", async ({ page }) => {
        await loginPage.loginToApplication(process.env.PROBLEM_USER);
        await loginPage.validateUrl(Urls.INVENTORY_URL);

    })

    test("login with performance_glitch_user", async ({ page }) => {
        await loginPage.loginToApplication(process.env.PERFORMANCE_GLITCH_USER);
        await loginPage.validateUrl(Urls.INVENTORY_URL);

    })

})
