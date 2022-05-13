let products = document.querySelector('.products').cloneNode(true)

function createNewProductButton() {
  createNewProduct()
}

function createNewProduct() {
  document.querySelector('.products').after(products)
}
