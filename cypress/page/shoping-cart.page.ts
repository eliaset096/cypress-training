class ShopingCartPage{

    private tShirtSelect: string;
    private processSelectTShirt: string;

    constructor(){
        this.tShirtSelect = "[style*=\"display: block;\"] .button-container > a";
        this.processSelectTShirt = ".cart_navigation span";
    }

    public addTShirtToCar(): void {
        cy.get(this.tShirtSelect).click()
    }

    public processTShirtSelectIncar(): void {
        cy.get(this.processSelectTShirt).click()
    }
   

}
export {ShopingCartPage}
