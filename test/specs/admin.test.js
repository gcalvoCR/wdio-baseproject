const login = require('../../pages/login.page');
const dashboard = require('../../pages/dashboard.page');
credentials = require('../../data/credentials');

describe('Golden Path', function(){
    let cifTenant = null;
    let leaTenant = null;

    before('Should login first', ()=>{
        console.log('begore hook')
    });

    it('Should open up the url', ()=>{
        browser.url('/');
        browser.pause(5000);
        
    });

});