import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import Urls from "../helpers/Urls";


export default class ProductPage extends BasePage {

    public url:string = Urls.INVENTORY_URL;
    private pageTitleElement : Locator;

    constructor(protected page: Page) {
        super(page);
        this.pageTitleElement = this.page.locator('[class="title"]');
        
    }

    public async validateTitle(title : string) {
        this.validateElementText(this.pageTitleElement,title);
    }

    public async addOrRemoveProductToCart(action:string, productname:string){
        let nameLowerCaseWithDash = await this.convertToLowerCaseWithDash(productname)
        let name = "add-to-cart-" + nameLowerCaseWithDash
        switch (action){

            case 'add':

            console.log("adding" ,name, "product to the cart")
            await this.page.locator(`[data-test="add-to-cart-${nameLowerCaseWithDash}"]`).click()
            console.log('verify that the locator text was chaned to remove after adding it to the cart')
            expect (this.page.locator(`[data-test="remove-${nameLowerCaseWithDash}"]`)).toBeVisible()
            break;

            case 'remove':

            console.log("removing the" ,name, "product from cart")
            await this.page.locator(`[data-test="remove-${nameLowerCaseWithDash}"]`).click()
            console.log('verify that the locator text was chaned to add after removing the product from the cart')
            expect (this.page.locator(`[data-test="add-to-cart-${nameLowerCaseWithDash}"]`)).toBeVisible()
            break;

            default:
                console.log("you didnt select valid action type: add / remove")

        }
        
    }

    public async verifyCartIcon(numberOfItems:number) {
         let items = numberOfItems.toString()
         if (numberOfItems == 0){
            console.log('verify that the shoping cart is empty')
            expect (this.page.locator('#shopping_cart_container a')).toBeVisible()
         } else {
            console.log('verify that the shoping cart has', numberOfItems,"items in it")
            expect (this.page.locator('a').filter({ hasText: items })).toBeVisible()
         }

    }

    public async verifyItemPrice(item:string , priceToVerify:string ){

        let itemNumber;
        switch (item) {

            case "Sauce Labs Backpack":
                itemNumber = 1;
            break;

            case "Sauce Labs Bike Light":
                itemNumber = 2;
            break;

            case "Sauce Labs Bolt T-Shirt":
                itemNumber = 3;
            break;

            case "Sauce Labs Fleece Jacket":
                itemNumber = 4;
            break;

            case "Sauce Labs Onesie":
                itemNumber = 5;
            break;

            case "Test.allTheThings() T-Shirt (Red)":
                itemNumber = 6;
            break;

            default:
                console.log("you did not pass the right item")
            
            }

            let price = await this.page.locator(`xpath=(//div[@class="inventory_item_price"])[${itemNumber}]`).textContent()
            console.log( "verify that the price of item ", item, "is" , price)
            expect(priceToVerify == price).toBeTruthy()

       


    }
}