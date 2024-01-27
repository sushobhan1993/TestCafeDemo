import { t, Selector } from 'testcafe';

class LoginHrmsPage {
    constructor() {
        
        this.HeaderText = Selector('#root > div.hvh-100.MuiBox-root.css-0 > div > div:nth-child(1) > div > div.form-box > h1');
        //this.LoginButton = Selector('.MuiButton-containedPrimary');

    }

} 
export default new LoginHrmsPage();