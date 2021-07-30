class AddressStepPage{

    private addressButton: string;

    constructor(){
        //this.addressButton = "[name=processAddress]";
        this.addressButton = "[name=processAddress]";

    }

    public confirmAddress(): void {
        cy.get(this.addressButton).click()
    }

}
export {AddressStepPage}
