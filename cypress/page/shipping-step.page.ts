class ShippingstepPage{

    private termsCheckBox: string;
    private carrierButton: string;

    constructor(){
        this.termsCheckBox = "[name=cgv]";
        this.carrierButton = "[name=processCarrier]";
    }

    public acceptTerms(): void {
        cy.get(this.termsCheckBox).click()
    }

    public proceedCarrier(): void {
        cy.get(this.carrierButton).click()
    }
   
}
export {ShippingstepPage}
