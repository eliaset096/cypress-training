class AddressStepPage{

    private address: string;

    constructor(){
        this.address = "[name=processAddress]";
    }

    public selectAddress(): void {
        cy.get(this.address).click()
    }

}
export {AddressStepPage}
