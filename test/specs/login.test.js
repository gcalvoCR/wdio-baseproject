const login = require('../../pages/login.page');
const basePage = require('../../pages/base.page');
credentials = require('../../data/credentials');

describe('Basic set of tests related to login', function(){

    before('Should set a before hook', ()=>{
        console.log('begore hook')
    });

    it('Should open up the login link', ()=>{
        browser.url('/');
        basePage.goToLogin();
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/login");
        
    });

    it('Should login correctly', ()=>{
        browser.url('/login');
        login.login(credentials.username, credentials.password);
        expect(login.validMessage.isDisplayed()).equals(true);
        
    });

    it('Should not login on invalid username', ()=>{
        browser.url('/login');
        login.login("Wrong username", credentials.password);
        expect(login.invalidMessage.isDisplayed()).equals(true);
        
    });

    it('Should not login on invalid password', ()=>{
        browser.url('/login');
        login.login(credentials.username, "wrong pass");
        expect(login.invalidMessage.isDisplayed()).equals(true);
        
    });

});