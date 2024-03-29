import { t, Selector } from 'testcafe';

class HomePage {
    constructor() {
        this.logoutBtn = Selector('body > div.wrapper > nav > ul.navbar-nav.ml-auto > li:nth-child(7) > a');
        this.confirmpopup = Selector('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline');
        this.pageheading = Selector('body > div.wrapper > div.content-wrapper > div > div > div > div:nth-child(1) > h1');
        this.MenuJobs = Selector('body > div > aside.main-sidebar.sidebar-dark-primary.elevation-4 > div > div.os-padding > div > div > nav > ul > li:nth-child(4) > a'); 
    }

    async ClickonLogoutButton() {
        await t.click(this.logoutBtn);
        await t.click(this.confirmpopup);
        await t.wait(3000);
    }

    async ClickonJobs() {
        await t.click(this.MenuJobs);
        await t.wait(3000);
    }
}

export default new HomePage();
