import { test, expect } from '@playwright/test';
import {pages} from '../../pages/pages'
import { ErrorMessages } from '../../helpers/ErrorMessages';


test.describe("Negative login Scenarios", () => {

    
    test.beforeEach(async({page}) => {
   
    })

    test ("login with locked_out_user", async({page}) => {
        const { loginPage } = pages(page);
        await loginPage.loginToApplication(process.env.LOCKED_OUT_USER);
        await loginPage.validateErrorMessage(ErrorMessages.LOGIN_WITH_LOCKED_USER);

    })

    test ("login with incorrect user name", async({page}) => {
        const { loginPage } = pages(page);
        await loginPage.loginToApplication("notExistUser");
        await loginPage.validateErrorMessage(ErrorMessages.INCORRECT_CREDENTIALS);

    })

    test ("login with incorrect password", async({page}) => {
        const { loginPage } = pages(page);
        await loginPage.loginToApplication(process.env.STANDARD_USER,"1234");
        await loginPage.validateErrorMessage(ErrorMessages.INCORRECT_CREDENTIALS);

    })
    

})