import { test, expect } from '@playwright/test';
import { pages } from '../../pages/pages';


test.beforeEach(async({page}) => {
   
   
})

test ("verify items prices ", async({page}) => {

    const { loginPage, productPage } = pages(page);
    
    await loginPage.loginToApplication();
    await productPage.visit();
    await productPage.verifyItemPrice('Sauce Labs Backpack')
    await productPage.verifyItemPrice('Sauce Labs Bike Light')
    await productPage.verifyItemPrice('Sauce Labs Bolt T-Shirt')
    await productPage.verifyItemPrice('Sauce Labs Fleece Jacket')
    await productPage.verifyItemPrice('Sauce Labs Onesie')
    await productPage.verifyItemPrice('Test.allTheThings() T-Shirt (Red)')


})