"use strict";
// product 1 remove
document.getElementById("removeProduct1").addEventListener("click", function () {
  remove("removeProduct1", 1219);
});
document.getElementById("removeProduct2").addEventListener("click", function () {
  remove("removeProduct2", 59);
});
document.getElementById("addProduct1").addEventListener("click", function () {
  add("addProduct1", 1219);
});
document.getElementById("addProduct2").addEventListener("click", function () {
  add("addProduct2", 59);
});

function remove(id, price) {
  const product = id[id.length - 1];
  let productNumber = document.getElementById("productNumber" + product).value;
  if (productNumber > 0) {
    productNumber--;
    document.getElementById("productNumber" + product).value = productNumber;
    document.getElementById("productPrice" + product).innerText = productNumber * price;
    totalPrice(-1 * price);
  }
}
function add(id, price) {
  const product = id[id.length - 1];
  let productNumber = document.getElementById("productNumber" + product).value;
  productNumber++;
  document.getElementById("productNumber" + product).value = productNumber;
  document.getElementById("productPrice" + product).innerText = productNumber * price;
  totalPrice(price);
}
function totalPrice(priceChange) {
  let subTotal = document.getElementById("subTotal").innerText;
  let subTotalNumber = Number(subTotal);
  subTotalNumber += priceChange;
  document.getElementById("subTotal").innerText = subTotalNumber;
  document.getElementById("total").innerText = subTotalNumber;
}