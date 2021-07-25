class ShippingstepPage{

    private checkBox: string;
    private carrier: string;

    constructor(){
        this.checkBox = "[name=cgv]";
        this.carrier = "[name=processCarrier]";
    }

    public checkingBox(): void {
        cy.get(this.checkBox).click()
    }

    public processCarrier(): void {
        cy.get(this.carrier).click()
    }
   

}
export {ShippingstepPage}
