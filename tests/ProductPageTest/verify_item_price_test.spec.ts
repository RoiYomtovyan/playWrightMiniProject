import { test, expect } from '@playwright/test';
import { pages } from '../../pages/pages';


test.beforeEach(async({page}) => {
   
   
})

test ("verify items prices ", async({page}) => {

    const { loginPage, productPage } = pages(page);
    
    await loginPage.loginToApplication();
    await productPage.visit();
    await productPage.verifyItemPrice('Sauce Labs Backpack' ,'$29.99')
    await productPage.verifyItemPrice('Sauce Labs Bike Light' ,'$9.99')
    await productPage.verifyItemPrice('Sauce Labs Bolt T-Shirt' ,'$15.99')
    await productPage.verifyItemPrice('Sauce Labs Fleece Jacket' ,'$49.99')
    await productPage.verifyItemPrice('Sauce Labs Onesie' ,'$7.99')
    await productPage.verifyItemPrice('Test.allTheThings() T-Shirt (Red)' ,'$15.99')


})