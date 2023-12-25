import { ClientFunction, t, Selector } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'https://the-internet.herokuapp.com/login'
const getURL = ClientFunction(() => window.location.href);

fixture('Login Page').page(url)

test('Loading login Page', async t => {

await t.expect(getURL()).contains(url);
await t.expect(LoginPage.loginBtn.exists).ok();

});

test('Form -Successfully Login', async t => {

    LoginPage.SetUserName('tomsmith');
    LoginPage.SetPassword('SuperSecretPassword!');
    LoginPage.ClickonLoginButton();

    await t.expect(HomePage.responceCard.innerText).contains('You logged into a secure area!');
    

    
});

test('Form -UnSuccessfully Login', async t => {

    LoginPage.SetUserName('tomsmithdd');
    LoginPage.SetPassword('SuperSecretPa');
    LoginPage.ClickonLoginButton();

    await t.expect(LoginPage.responceCard.innerText).contains('Your username is invalid!');
    

    
});




