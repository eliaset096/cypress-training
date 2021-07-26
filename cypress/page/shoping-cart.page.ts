class ShopingCartPage{

    private tShirtSelectButton: string;
    private proceedSelectTShirtButton: string;

    constructor(){
        this.tShirtSelectButton = "[style*=\"display: block;\"] .button-container > a";
        this.proceedSelectTShirtButton = ".cart_navigation span";
    }

    public addTShirtToCart(): void {
        cy.get(this.tShirtSelectButton).click()
    }

    public proceedTShirtSelectInCart(): void {
        cy.get(this.proceedSelectTShirtButton).click()
    }
    
}
export {ShopingCartPage}
