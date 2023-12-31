// LoginPage.js
/*
// Import necessary TestCafe modules
import { ClientFunction, t, Selector } from 'testcafe';

class LoginPage{

    constructor(){
        this.userNameInput = Selector('#username');
        this.passwordInput = Selector('#password');
        this.loginBtn = Selector('#login > button > i');
        this.responceCard =  Selector('div#flash');
    }


    async SetUserName(userName){
        await t.typeText(this.userNameInput, userName)
    }

    async SetPassword(password){
        await t.typeText(this.passwordInput, password)
    }

    async ClickonLoginButton(){

        await t.click(this.loginBtn);
    } 

    


}

export default new LoginPage();

*/

// LoginPage.js
/*

import { ClientFunction, t, Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.userNameInput = Selector('#username');
        this.passwordInput = Selector('#password');
        this.loginBtn = Selector('#login > button > i');
        this.responceCard = Selector('div#flash');
    }

    async SetUserName(userName) {
        await t.typeText(this.userNameInput, userName);
    }

    async SetPassword(password) {
        await t.typeText(this.passwordInput, password);
    }

    async ClickonLoginButton() {
        await t.click(this.loginBtn);
    }
}

export default LoginPage; // Exporting the class itself, not an instance
*/


// LoginPage.js

/*
import { ClientFunction, t, Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.userNameInput = Selector('#username');
        this.passwordInput = Selector('#password');
        this.loginBtn = Selector('#login > button > i');
        this.responceCard = Selector('div#flash');
    }

    async SetUserName(userName) {
        await t.typeText(this.userNameInput, userName);
    }

    async SetPassword(password) {
        await t.typeText(this.passwordInput, password);
    }

    async ClickonLoginButton() {
        await t.click(this.loginBtn);
    }
}

export default LoginPage;
*/


//new

import { ClientFunction, t, Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.userNameInput = Selector('#username');
        this.passwordInput = Selector('#password');
        this.loginBtn = Selector('#login > button > i');
        this.responceCard = Selector('div#flash');
    }

    async SetUserName(userName) {
        await t.typeText(this.userNameInput, userName);
    }

    async SetPassword(password) {
        await t.typeText(this.passwordInput, password);
    }

    async ClickonLoginButton() {
        await t.click(this.loginBtn);
    }
}

export default LoginPage;
