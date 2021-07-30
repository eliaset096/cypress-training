
import { AddressStepPage, LoginPage, MenuContentPage, PaymentStepPage, ProductsListPage, ShippingstepPage, ShopingCartPage } from "../page/index"



describe("Buy a t-shirt", () => {

  const menuContentPage = new MenuContentPage()
  const productsListPage = new ProductsListPage()
  const shopingCartPage = new ShopingCartPage()
  const loginPage = new LoginPage()
  const addressStepPage = new AddressStepPage()
  const shippingstepPage = new ShippingstepPage()
  const paymentStepPage = new PaymentStepPage()

  it("then the t-shirt should be bought", () => {

    const tShirtsNamesArray: string[] = ["Faded Short Sleeve T-shirts"];
    const sThirtsNumber = 1; 

    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()
    
    productsListPage.validateItemsNumber(sThirtsNumber)
    productsListPage.validateItemsNames(tShirtsNamesArray)
    productsListPage.selectTShirtOfProductsList()

    shopingCartPage.addTShirtToCart()
    shopingCartPage.proceedTShirtSelectInCart()

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor")

    addressStepPage.confirmAddress()

    shippingstepPage.acceptTerms()
    shippingstepPage.proceedCarrier()

    paymentStepPage.paybyBankWire()
    paymentStepPage.confirmPay()
    paymentStepPage.getConfirmationTitle().should("have.text", "Your order on My Store is complete.")

  });
});
