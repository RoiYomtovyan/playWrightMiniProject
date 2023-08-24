import { Locator, Page, expect } from "@playwright/test";
import UserCredentials from "../helpers/UserCredentials";

export default class LoginPage {

    userNameField : Locator;
    passwordField : Locator;
    loginButton : Locator;


    constructor (protected page: Page){
        this.userNameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
        
    }

    // Roi: in the login application we pass defult values in the signeture so when we call it we can pass no parameters 

    public async loginToApplication(username = UserCredentials.STANDARD_USER, 
        password = UserCredentials.PASSWORD , url = UserCredentials.BASE_URL) {
        await this.page.goto(url);
        await this.validateUrl(UserCredentials.BASE_URL)
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await this.validateUrl(`${UserCredentials.BASE_URL}inventory.html`)
    }

    public async validateUrl (url:string) {
        await expect(this.page).toHaveURL(url);
    }
}