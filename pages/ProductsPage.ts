import { Locator, Page, expect } from "@playwright/test";

export default class ProductPage {

    private PageTitle : Locator;

    constructor(protected page: Page) {
        this.PageTitle = this.page.locator('[class="title"]');
        
    }

    public async validateTitle(title : string) {
        await expect (this.PageTitle).toContainText(title)
    }
}