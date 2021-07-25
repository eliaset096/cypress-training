class PaymentStepPage{

    private bankWire: string;
    private confirmPay: string;
    private finishShopping: string;

    constructor(){
        this.bankWire = "[class=bankwire]";
        this.confirmPay = "#cart_navigation > button";
        this.finishShopping = "#center_column > div > p > strong";
    }

    public payingWire(): void {
        cy.get(this.bankWire).click()
    }

    public confirmingPay(): void {
        cy.get(this.confirmPay).click()
    }

    public finishingShopping():void {
        cy.get(this.finishShopping).should("have.text", "Your order on My Store is complete.")
    }

}
export {PaymentStepPage}
