class DressesListPage {

    private dressItem: string;
    private dressName: string;
  
    constructor(){
      this.dressItem = ".product-container"
      this.dressName = `${this.dressItem} .product-name`
    }
  
    getDressProducts() :Cypress.Chainable {
      return cy.get(this.dressItem)
    }
  
    validateItemsNumber(itemsNumber: number) :void {
      cy.get(this.dressItem).should("have.length", itemsNumber)
    }
  
    validateItemsNames(names: string[]) :void{
      cy.get(this.dressName).each((item, index) => {
        cy.wrap(item).should("contain.text", names[index])
      })
    } 
}
export {DressesListPage}
