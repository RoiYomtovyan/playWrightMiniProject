import { Locator, Page, expect } from "@playwright/test";
import UserCredentials from "../helpers/UserCredentials";
import { ErrorMessages } from "../helpers/ErrorMessages";
import { BasePage } from "./BasePage";

export default class LoginPage extends BasePage {

    private userNameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;


    constructor(protected page: Page) {
        super(page);
        this.userNameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
        this.errorMessage = this.page.locator('[data-test="error"]');
    }

    // Roi: in the login application we pass defult values in the signeture so when we call it we can pass no parameters 

    public async loginToApplication(username = UserCredentials.STANDARD_USER,
        password = UserCredentials.PASSWORD, url = UserCredentials.BASE_URL) {
        await this.page.goto(url);
        await this.validateUrl(UserCredentials.BASE_URL)
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }



    public async validateErrorMessage(errorMessage: ErrorMessages) {
        await this.validateElementText(this.errorMessage, errorMessage.valueOf())
    }
}