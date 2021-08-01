import { AddressStepPage, LoginPage, MenuContentPage, PaymentStepPage, ProductsListPage, ShippingstepPage, ShopingCartPage } from "../page/index"

let menuContentPage : MenuContentPage;
let productsListPage : ProductsListPage;
let shopingCartPage : ShopingCartPage;
let loginPage : LoginPage;
let addressStepPage : AddressStepPage;
let shippingstepPage : ShippingstepPage;
let paymentStepPage : PaymentStepPage;

describe("Buy a t-shirt", () => {

  before(() => {
    menuContentPage = new MenuContentPage()
    productsListPage = new ProductsListPage()
    shopingCartPage = new ShopingCartPage()
    loginPage = new LoginPage()
    addressStepPage = new AddressStepPage()
    shippingstepPage = new ShippingstepPage()
    paymentStepPage = new PaymentStepPage()
  })

  it("then the t-shirt should be bought", () => {

    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()
    
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
