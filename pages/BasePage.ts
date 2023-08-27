import { Locator, Page, expect, test } from "@playwright/test";


export abstract class BasePage {

    constructor(protected page: Page) {

    }

    public async validateUrl(url: string) {
        await test.step(`validating that the navigated URL is ${url}`, async () => {
            await expect(this.page).toHaveURL(url);

        })

    }

    public async validateElementText(element: Locator, expectedText: string) {
        await test.step(`validating that the locator text is ${expectedText}`, async () => {
            await expect(element).toContainText(expectedText);

        })

    }
}