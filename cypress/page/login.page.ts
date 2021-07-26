class LoginPage{

    private emailTextInput: string;
    private passwordTextInput: string;
    private loginButton: string;

    constructor(){
        this.emailTextInput = "#email";
        this.passwordTextInput = "#passwd";
        this.loginButton = "[name=SubmitLogin]";
    }

    public login(mail:string, pass:string ):void{
        cy.get(this.emailTextInput).type(mail)
        cy.get(this.passwordTextInput).type(pass)
        cy.get(this.loginButton).click()
    }

}
export {LoginPage}
