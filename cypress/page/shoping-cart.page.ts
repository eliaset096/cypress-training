class ShopingCartPage{

    private tShirtSelectButton: string;
    private proceedSelectTShirtButton: string;

    constructor(){
        this.tShirtSelectButton = "div.button-container > a.btn.btn-default.button.button-medium";
        this.proceedSelectTShirtButton = "p.cart_navigation span";

    }

    public addTShirtToCart(): void {
        cy.get(this.tShirtSelectButton).click()
    }

    public proceedTShirtSelectInCart(): void {
        cy.get(this.proceedSelectTShirtButton).click()
    }
    
}
export {ShopingCartPage}
