class ProductsListPage{

    private tShirtButton: string;

    constructor(){
        this.tShirtButton = "a.button.ajax_add_to_cart_button.btn.btn-default";

    }

    public selectTShirtOfProductsList(): void {
        cy.get(this.tShirtButton).click()
    }

}
export {ProductsListPage}
