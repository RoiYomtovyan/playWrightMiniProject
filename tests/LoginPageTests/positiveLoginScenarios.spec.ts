import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import UserCredentials from '../../helpers/UserCredentials';


test.describe("positive login Scenarios", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
    })

    test("login with problem_user", async ({ page }) => {
        await loginPage.loginToApplication(UserCredentials.PROBLEM_USER);
        await loginPage.validateUrl(UserCredentials.INVENTORY_URL);

    })

    test("login with performance_glitch_user", async ({ page }) => {
        await loginPage.loginToApplication(UserCredentials.PERFORMANCE_GLITCH_USER);
        await loginPage.validateUrl(UserCredentials.INVENTORY_URL);

    })

})
