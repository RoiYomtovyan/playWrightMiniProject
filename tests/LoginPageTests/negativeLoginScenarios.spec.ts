import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import UserCredentials from '../../helpers/UserCredentials';
import { ErrorMessages } from '../../helpers/ErrorMessages';


test.describe("Negative login Scenarios", () => {

    let loginPage: LoginPage;

    test.beforeEach(async({page}) => {
         loginPage = new LoginPage(page);
    })

    test ("login with locked_out_user", async({page}) => {
        await loginPage.loginToApplication(UserCredentials.LOCKED_OUT_USER);
        await loginPage.validateErrorMessage(ErrorMessages.LOGIN_WITH_LOCKED_USER);

    })

    test ("login with incorrect user name", async({page}) => {
        await loginPage.loginToApplication("notExistUser");
        await loginPage.validateErrorMessage(ErrorMessages.INCORRECT_CREDENTIALS);

    })

    test ("login with incorrect password", async({page}) => {
        await loginPage.loginToApplication(UserCredentials.STANDARD_USER,"1234");
        await loginPage.validateErrorMessage(ErrorMessages.INCORRECT_CREDENTIALS);

    })
    

})
