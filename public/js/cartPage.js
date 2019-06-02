const CartPage = () => {
  if (userCart) {
    const cartBody = document.querySelector(".cart--body");
    let products = JSON.parse(localStorage.getItem("products"));
    let cartProducts = userCart.getProducts();
    for (productId in cartProducts) {
      const p = products.find(p => {
        return p.id == productId;
      });
      if (p) {
        p.qty = cartProducts[productId];
        renderTable(cartBody, p);
      }
    }

    const actionBtns = cartBody.querySelectorAll('button.cart--action[data-id]');
    actionBtns.forEach( actionBtn => {
        actionBtn.addEventListener('click', (event) => {
            const target = event.target;
            switch(target.textContent){
                case "+":
                    const newValPlus = parseInt(target.nextElementSibling.value) + 1;
                    target.nextElementSibling.value = newValPlus;
                    updateTotal(target.dataset.id, newValPlus, target.dataset.price);
                    userCart.add(target.dataset.id.split('__')[1]);
                break;
                case "-":
                    let newVal = parseInt(target.previousElementSibling.value) - 1;
                    newVal =  newVal >= 1 ? newVal : 1;
                    target.previousElementSibling.value = newVal;
                    updateTotal(target.dataset.id, newVal, target.dataset.price);
                    userCart.remove(target.dataset.id.split('__')[1]);
                break;
                default:
                console.log("invalid operation");
            }
        })
    })

    const actionInputs = cartBody.querySelectorAll('input.cart--action.cart--action__input');
    actionInputs.forEach( input => {
        input.addEventListener('change', (event) => {
            console.log("Change Event");
        })
    })
  }
  
  function updateTotal(id, qty, price){
    const total = document.getElementById(id);
    total.textContent = "$"+parseInt(qty) * parseFloat(price);
  }

  function renderTable(parentElement, product) {
    const id = `total__${product.id}`;
    parentElement.innerHTML += ` <tr class="cart--product">
      <td class="cart--product__image">
        <img src="${product.picture}" alt="" />
      </td>
      <td>${product.title}</td>
      <td>$${product.price}</td>
      <td>
        <button class="cart--action" data-id="${id}" data-price="${product.price}">+</button>
        <input type="number" step="1" min="0" value="${product.qty}" class="cart--action cart--action__input" />
        <button class="cart--action" data-id="${id}" data-price="${product.price}">-</button>
      </td>
      <td id="${id}">$${product.qty * parseFloat(product.price)}</td>
      <td>
        <button class="cart--action">Remove</button>
      </td>
    </tr>`;
  }
};
