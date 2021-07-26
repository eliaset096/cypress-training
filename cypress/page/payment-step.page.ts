class PaymentStepPage{

    private bankWireAHyperlink: string;
    private confirmPayButton: string;
    private finishShoppingPTitle : string;

    constructor(){
        this.bankWireAHyperlink = "[class=bankwire]";
        this.confirmPayButton = "#cart_navigation > button";
        this.finishShoppingPTitle = "#center_column > div > p > strong";
    }

    public paybyBankWire(): void {
        cy.get(this.bankWireAHyperlink).click()
    }

    public confirmPay(): void {
        cy.get(this.confirmPayButton).click()
    }

    public getConfirmationTitle() {
        return cy.get(this.finishShoppingPTitle)
    }

}
export {PaymentStepPage}
