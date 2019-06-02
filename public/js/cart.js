function Cart() {
  const cartKey = "__user__cart__DB";
  let showCartElement = null;
  let shoppingCart = {};

  this.init = function(selector) {
    const self = this;
    showCartElement = document.querySelector(".cart--count");
    if (selector && selector != "") {
      const elements = document.querySelectorAll(selector);

      elements.forEach(item => {
        item.addEventListener("click", function() {
          self.add(this.dataset.id);
        });
      });
    }
    this.readStorage();
    this.updateBag();
  };
  this.updateBag = function() {
    let totalCount = 0;
    for (id in shoppingCart) {
      totalCount += shoppingCart[id];
    }
    if (totalCount) {
      showCartElement.textContent = totalCount;
    }
  };
  this.add = function(productId) {
    if (!shoppingCart[productId]) {
      shoppingCart[productId] = 1;
    } else {
      shoppingCart[productId] += 1;
    }
    this.updateBag();
    this.updateStorage();
  };

  this.updateStorage = function() {
    localStorage.setItem(cartKey, JSON.stringify(shoppingCart));
  };
  this.readStorage = function() {
    shoppingCart = JSON.parse(localStorage.getItem(cartKey));
    if (!shoppingCart) {
      shoppingCart = {};
    }
  };
  this.remove = function(productId) {
    if (shoppingCart[productId] && shoppingCart[productId] > 1) {
        debugger;
      shoppingCart[productId] -= 1;
    }
    this.updateBag();
    this.updateStorage();
  };
  this.getProducts = function() {
    return shoppingCart;
  };
  this.checkout = function() {};
  this.service = function() {};
}
