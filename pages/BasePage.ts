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

    async sleep(time = 5): Promise<void> {
        await test.step(`Sleeping ${time} seconds`, async () => {
          console.log(`Sleeping ${time}`)
          await new Promise(f => setTimeout(f, time * 1000));
        });
      }


      async selectValueFromDropDown(label:string, value:string): Promise<void> {
        await test.step(`Click on Drop Down ${label}`, async () => {
          console.log(`Click on Drop Down ${label}`)
    
          const labelEl = await this.page.locator(`label:has-text("${label}")`);
          const dropdownContainer = await labelEl.locator('xpath=following-sibling::div');
          await dropdownContainer.click();
    
          await this.page.keyboard.press('ArrowDown');
    
          await this.page.getByText(value).click();
          
        });
      }

      async reloadPage(): Promise <void> {
        await this.page.reload();
      }
}