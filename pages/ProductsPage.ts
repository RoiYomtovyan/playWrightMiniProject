import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class ProductPage extends BasePage {

    private pageTitleElement : Locator;

    constructor(protected page: Page) {
        super(page);
        this.pageTitleElement = this.page.locator('[class="title"]');
        
    }

    public async validateTitle(title : string) {
        this.validateElementText(this.pageTitleElement,title);
    }
}