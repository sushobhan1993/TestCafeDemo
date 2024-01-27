//JobsPage.js
import { t, Selector } from 'testcafe';

class JobsPage {
    constructor() {
        
        this.pageheading = Selector('body > div > div.content-wrapper > div.content-header > div > div > div:nth-child(1) > h1');
        this.AddJobMenu = Selector('#topIconPanel > a > span');

        //Add Job
        this.HiringPipeline_click=Selector('#select2-hiring_pipeline-container');
        this.HiringPipeline_search=Selector('body > span > span > span.select2-search.select2-search--dropdown > input');
        this.HiringPipeline_search_click=Selector('#select2-hiring_pipeline-results > li');
        this.JobTitleInput=Selector('#job-title');
        this.Company_click=Selector('#select2-company_id-container');
        this.Company_search=Selector('body > span > span > span.select2-search.select2-search--dropdown > input');
        this.Company_search_click=Selector('#select2-company_id-results > li');
        //this.JobDescriptionInput=Selector('#description');
        //this.JobDescriptionInput = Selector('iframe[data-id="description"]').find('#description');

        


    }

    async ClickonAddJob() {
        await t.click(this.AddJobMenu);
        await t.wait(3000);
    }

    async HiringPipeline(search_HiringPipeline) {
        await t.click(this.HiringPipeline_click);
        await t.typeText(this.HiringPipeline_search,search_HiringPipeline);
        await t.click(this.HiringPipeline_search_click.withText(search_HiringPipeline)); 
    }
    async SetJobTitle(JobTitle){
        await t.typeText(this.JobTitleInput,JobTitle);
        await t.wait(3000);
    }   
    async SetCompany(Companyname) {
        await t.click(this.Company_click);
        await t.typeText(this.Company_search,Companyname);
        await t.click(this.Company_search_click.withText(Companyname)); 
    }
    /*async SetJobDescription(JobDes){
        await t.typeText(this.JobDescriptionInput,JobDes);
        await t.wait(3000);

    }
    */
   

}

export default new JobsPage();