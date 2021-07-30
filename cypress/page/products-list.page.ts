class ProductsListPage{

    private tShirtItem: string;
    private tShirtName: string;
    private tShirtButton: string;

    constructor(){
        this.tShirtItem = ".product-container"
        this.tShirtName = `${this.tShirtItem} .product-name`
        this.tShirtButton = "a.button.ajax_add_to_cart_button.btn.btn-default";
    }

    getTShirtProducts() :Cypress.Chainable {
        return cy.get(this.tShirtItem)
      }
    
    validateItemsNumber(itemsNumber: number) :void {
        cy.get(this.tShirtItem).should("have.length", itemsNumber)
      }
    
    validateItemsNames(names: string[]) :void{
        cy.get(this.tShirtName).each((item, index) => {
          cy.wrap(item).should("contain.text", names[index])
        })
      }

    public selectTShirtOfProductsList(): void {
        cy.get(this.tShirtButton).click()
    }

}
export {ProductsListPage}
