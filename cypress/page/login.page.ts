class LoginPage{

    private email: string;
    private password: string;
    private btnLogin: string;

    constructor(){
        this.email = "#email";
        this.password = "#passwd";
        this.btnLogin = "[name=SubmitLogin]";
    }

    public putEmail(): void {
        cy.get(this.email).type("aperdomobo@gmail.com")
    }

    public putPassword(): void {
        cy.get(this.password).type("WorkshopProtractor")
    }

    public clickinglogin(): void {
        cy.get(this.btnLogin).click()
    }

    
   
}
export {LoginPage}
