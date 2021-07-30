class MenuContentPage {
  
    private menuContentPageURL: string
    private tShirtMenu: string;
    private dressesMenu: string;

    constructor() {
        this.menuContentPageURL = "http://automationpractice.com/"
        this.tShirtMenu = "#block_top_menu > ul > li > a[title=T-shirts]";
        this.dressesMenu = "#block_top_menu > ul > li > a[title=Dresses]";
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public goToDressesMenu(): void {
        cy.get(this.dressesMenu).click()
    }
    
}
export { MenuContentPage }
