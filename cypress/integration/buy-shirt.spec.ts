
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

      productsListPage.goToProductsList()

      shopingCartPage.addTShirtToCar()
      shopingCartPage.processTShirtSelectIncar()

      loginPage.putEmail()
      loginPage.putPassword()
      loginPage.clickinglogin()

      addressStepPage.selectAddress()

      shippingstepPage.checkingBox()
      shippingstepPage.processCarrier()

      paymentStepPage.payingWire()
      paymentStepPage.confirmingPay()
      paymentStepPage.finishingShopping()

    });
  });
