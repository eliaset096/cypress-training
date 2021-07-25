class ProductsListPage{

    private productsList: string;

    constructor(){
        this.productsList = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    }

    public goToProductsList(): void {
        cy.get(this.productsList).click()
    }

}
export {ProductsListPage}
