import { Page } from "@playwright/test";

export default class LoginPage {

    protected page: Page;

    constructor (page:Page){
        this.page = page;
    }

    public async loginToApplication() {
        await this.page.locator('[data-test="username"]').fill('standard_user');
        await this.page.locator('[data-test="password"]').fill('secret_sauce');
        await this.page.locator('[data-test="login-button"]').click();
    }
}