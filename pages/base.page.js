class BasePage{

    /**************************************  Elements  **************************************/

    get formAuthLink() {return $('a[href="/login"]')}

    /**************************************  Actions  **************************************/

    goToLogin(){
        this.formAuthLink.waitForDisplayed();
        this.formAuthLink.click();
    }

}

module.exports = new BasePage();