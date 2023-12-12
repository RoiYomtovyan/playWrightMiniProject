import { test, expect } from '@playwright/test';
import { pages } from '../../pages/pages';


test.beforeEach(async({page}) => {
   
   
})

test ("add and remove products to cart and verify that the cart icon number is changed ", async({page}) => {

    const { loginPage, productPage } = pages(page);
    
    await loginPage.loginToApplication();
    await productPage.visit();
    await productPage.verifyCartIcon(0);
    await productPage.addOrRemoveProductToCart('add','Sauce Labs Bolt T-Shirt');
    await productPage.verifyCartIcon(1);
    await productPage.addOrRemoveProductToCart('add','Sauce Labs Bike Light')
    await productPage.verifyCartIcon(2);
    await productPage.addOrRemoveProductToCart('remove','Sauce Labs Bolt T-Shirt');
    await productPage.verifyCartIcon(1);
    await productPage.addOrRemoveProductToCart('remove','Sauce Labs Bike Light');
    await productPage.verifyCartIcon(0);
    await productPage.verifyItemPrice('Sauce Labs Bolt T-Shirt' ,'$15.99')

})