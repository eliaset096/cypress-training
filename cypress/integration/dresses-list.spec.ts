import { MenuContentPage, DressesListPage } from "../page/index"

describe("the user navigates to the dresses page should", () => {

  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  })

  it("show the available dresses", () => {

    const dressesNamesArray: string[] = ["Printed Dress", "Printed Dress","Printed Summer Dress", "Printed Summer Dress","Printed Chiffon Dress"];
    const dressesNumber = 5; 

    menuContentPage.visitMenuContentPage()
    menuContentPage.goToDressesMenu()

    dressesListPage.getDressProducts()
    dressesListPage.validateItemsNumber(dressesNumber)
    dressesListPage.validateItemsNames(dressesNamesArray)
    
  })
})
