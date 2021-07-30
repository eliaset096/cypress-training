class PaymentStepPage{

    private bankWireAHyperlink: string;
    private confirmPayButton: string;
    private finishShoppingPTitle : string;

    constructor(){
        this.bankWireAHyperlink = ".bankwire";
        this.confirmPayButton = "#cart_navigation span";
        this.finishShoppingPTitle = "#center_column .cheque-indent strong";
    }

    public paybyBankWire(): void {
        cy.get(this.bankWireAHyperlink).click()
    }

    public confirmPay(): void {
        cy.get(this.confirmPayButton).click()
    }

    public getConfirmationTitle(): Cypress.Chainable {
        return cy.get(this.finishShoppingPTitle)
    }

}
export {PaymentStepPage}
