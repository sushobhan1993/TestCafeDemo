//HomePage.js
// Import necessary TestCafe modules

/*
import { ClientFunction, t, Selector } from 'testcafe';

class HomePage{

    constructor(){
        
        this.logoutBtn = Selector('#content > div > a > i');
        this.responceCard =  Selector('div#flash');
    }

    async ClickonLogoutButton(){

        await t.click(this.logoutBtn);
    } 

   


}

export default new HomePage();

 */

/*
// HomePage.js
import { Selector, t } from 'testcafe';

class HomePage {
    constructor() {
        this.logoutBtn = Selector('#content > div > a > i');
        this.responceCard = Selector('div#flash');
    }

    async ClickonLogoutButton() {
        await t.click(this.logoutBtn);
    }
}

export default HomePage;

*/

//new

import { Selector, t } from 'testcafe';

class HomePage {
    constructor() {
        this.logoutBtn = Selector('#content > div > a > i');
        this.responceCard = Selector('div#flash');
    }

    async ClickonLogoutButton() {
        await t.click(this.logoutBtn);
    }
}

export default HomePage;
