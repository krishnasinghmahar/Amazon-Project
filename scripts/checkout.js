import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

loadProductsFetch().then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
})


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
