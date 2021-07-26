
import { AddressStepPage, LoginPage, MenuContentPage, PaymentStepPage, ProductsListPage, ShippingstepPage, ShopingCartPage } from "../page/index"

const menuContentPage = new MenuContentPage()
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage()
const loginPage = new LoginPage()
const addressStepPage = new AddressStepPage()
const shippingstepPage = new ShippingstepPage()
const paymentStepPage = new PaymentStepPage()

describe("Buy a t-shirt", () => {

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
