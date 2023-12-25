import { ClientFunction, t, Selector } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'https://the-internet.herokuapp.com/login'
const Homeurl = 'https://the-internet.herokuapp.com/secure'


const getURL = ClientFunction(() => window.location.href);

fixture('Home Page').page(url).beforeEach(async t =>{
    LoginPage.SetUserName('tomsmith');
    LoginPage.SetPassword('SuperSecretPassword!');
    LoginPage.ClickonLoginButton();

    await t.wait(5000);
});

test('Loading Home Page', async t => {

await t.expect(getURL()).contains(Homeurl);
await t.expect(HomePage.logoutBtn.exists).ok();

});

test('Successfully Logout', async t => {

        HomePage.ClickonLogoutButton();
        await t.wait (5000);

        await t.expect(LoginPage.responceCard.innerText).contains(' You logged out of the secure area!');
        
    
    });
    






