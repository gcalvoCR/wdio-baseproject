
class Login{

    /**************************************  Elements  **************************************/

    get inputUsername() {return $("input[name='username']")}
    get inputPassword() {return $("input[name='password']")}
    get btnLogin() {return $("button[type='submit']")}
    get invalidMessage(){ return $(".error")}
    get validMessage(){ return $(".success")}


    /**************************************  Actions  **************************************/

    login(username, password){
        this.enterUsername(username);
        this.enterPasword(password);
        this.clickBtnLogin();
    }
    
    clickBtnLogin(){
        this.btnLogin.click();
    }

    enterUsername(username){
        this.inputUsername.waitForDisplayed();
        this.inputUsername.setValue(username);
    }

    enterPasword(password){
        this.inputUsername.waitForDisplayed();
        this.inputPassword.setValue(password);
    }

}

module.exports = new Login();