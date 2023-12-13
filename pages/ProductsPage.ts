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

    public async verifyItemPrice(item:string) {
        
        let prices = {
            "Sauce Labs Backpack" : {itemNumber:'1' , price:'$29.99'},
            "Sauce Labs Bike Light" : {itemNumber:'2', price:'$9.99'},
            "Sauce Labs Bolt T-Shirt" : {itemNumber:'3', price:'$15.99'},
            "Sauce Labs Fleece Jacket" :{itemNumber:'4', price:'$49.99'},
            "Sauce Labs Onesie":{itemNumber:'5', price:'$7.99'},
            "Test.allTheThings() T-Shirt (Red)" : {itemNumber:'6', price:'$15.99'},
        }
        // Use the item name to get the corresponding item in the prices object
         const itemDetails = prices[item];
         if (itemDetails) {
        // If the item is found in the prices object, extract the item number
        const itemNumber = itemDetails.itemNumber;

        // Use the item number to construct the XPath and get the price
        const price = await this.page.locator(`xpath=(//div[@class="inventory_item_price"])[${itemNumber}]`).textContent();

        console.log("Verify that the price of item", item, "is", price);
        expect(itemDetails.price == price).toBeTruthy()
        } 

       else {
        console.log("Item not found in prices object");
      }
       

    }
    
}