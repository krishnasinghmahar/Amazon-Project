import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

async function loadPage() {

  try {
    await loadProductsFetch();
  } catch (error) {
    console.log('Unexpected Error! Please Try Again Later.');
  }

  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

// loadProductsFetch().then(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// })


// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   })
// }).then(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// })


// loadProducts(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// })
