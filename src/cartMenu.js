import { Product, saveLocalStorage, readLocalStorage } from "./itens";

const idsCartProductAmount = readLocalStorage('carrinho') ?? {};

function openCart() {
    document.getElementById('carrinho').classList.add('right-[0px]');
    document.getElementById('carrinho').classList.remove('right-[-360px]');

}

function closeCart() {
    document.getElementById('carrinho').classList.remove('right-[0px]');
    document.getElementById('carrinho').classList.add('right-[-360px]');
}

export function StartCart() {
    const buttonClose = document.getElementById('fechar-carrinho');
    const buttonOpen = document.getElementById('abrir-carrinho');

    buttonClose.addEventListener('click', closeCart);
    buttonOpen.addEventListener('click', openCart);
}


function removeToCart(idProduct) {
  delete idsCartProductAmount[idProduct];
  saveLocalStorage('carrinho',idsCartProductAmount);
  updatePriceCart();
  renderCartProductl();
}

function increaseAmountProduct(idProduct){
  idsCartProductAmount[idProduct]++;
  saveLocalStorage('carrinho',idsCartProductAmount);
  updatePriceCart();
  updateAmountInformation(idProduct);
}

function decreaseAmountProduct(idProduct){
  if(idsCartProductAmount[idProduct] === 1) {
    removeToCart(idProduct);
    return;
  }
  idsCartProductAmount[idProduct]--;
  updatePriceCart()
  updateAmountInformation(idProduct);
}

function updateAmountInformation(idProduct){
  document.getElementById(`quantidade-${idProduct}`).innerText = 
  idsCartProductAmount[idProduct];
}

function drawProductCart(idProduct){
  const productL = Product.find((p) => p.id === idProduct);
    const containerProductCart = document.getElementById('produtos-carrinho');
    const elementArticle = document.createElement('article');
    const articleClasses = [
      'flex',
      'bg-slate-100',
      'rounded-lg', 
      'p-1',
      'relative',
    ]
    for (const articleClass of articleClasses) {
      elementArticle.classList.add(articleClass);
    }

    const CardProductCart = ` <button id="remove-product-${productL.id}" class="absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img 
      src="./assets/${productL.image}" 
      alt="Carrinho - ${productL.name}" 
      class="h-24 rounded-lg"
    >
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${productL.name}</p>
      <p class="text-slate-400 text-xs">${productL.brand}</p>
      <p class="text-green-700 text-lg">$${productL.price}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
      <button id='decrease-product-${productL.id}'>-</button>
      <p id='quantidade-${productL.id}' class='ml-2'>${idsCartProductAmount[productL.id]}</p>
      <button id='increase-product-${productL.id}' class='ml-2'>+</button>
    </div>`;

    elementArticle.innerHTML = CardProductCart;
    containerProductCart.appendChild(elementArticle);

    document.getElementById(`decrease-product-${productL.id}`)
    .addEventListener('click', () => decreaseAmountProduct(productL.id));

    document.getElementById(`increase-product-${productL.id}`)
    .addEventListener('click', () => increaseAmountProduct(productL.id));

    document.getElementById(`remove-product-${productL.id}`)
    .addEventListener('click', () => removeToCart(productL.id));
}

export function renderCartProductl() {
  const containerProductCart = document.getElementById('produtos-carrinho');
  containerProductCart.innerHTML = '';
  
  for (const idProduct in idsCartProductAmount){
    drawProductCart(idProduct);
  }
}

export function addCart(idProduct){
    if(idProduct in idsCartProductAmount){
      increaseAmountProduct(idProduct);
      return;
    }
    idsCartProductAmount[idProduct] = 1;
    saveLocalStorage('carrinho',idsCartProductAmount);
    drawProductCart(idProduct);
    updatePriceCart()
}

export function updatePriceCart(){
  const priceCart = document.getElementById('preco-total');
  let totalPrice = 0;
  for ( const idProductCart in idsCartProductAmount ) {
    totalPrice += 
      Product.find(p => p.id === idProductCart).price * 
      idsCartProductAmount[idProductCart];
  }
  priceCart.innerText = `Total: $${totalPrice}`
}