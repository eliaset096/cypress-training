class PaymentStepPage{

    private bankWireAHyperlink: string;
    private confirmPayButton: string;
    private finishShoppingPTitle : string;

    constructor(){
        this.bankWireAHyperlink = "[class=bankwire]";
        this.confirmPayButton = "#cart_navigation > button.button.btn.btn-default.button-medium";
        this.finishShoppingPTitle = "#center_column > div.box > p.cheque-indent > strong.dark";
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
