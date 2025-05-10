import { addCart } from "./cartMenu";
import { Product } from "./itens";

export function renderProduct() {
  for (const eletronics of Product) {
    const cardProduct = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${
      Product.filter
        ? "videogames"
        : "smartphones" || Product.filter
        ? "tvs"
        : "notebooks"
    }
      Product.id <= "8"
        ? "videogames"
        : "notebooks" || Product.id <= "17"
        ? "televisoes"
        : "celulares"
    }' id="card-produto-${Product.id}">
        <img 
        src="./assets/${eletronics.image}" 
        alt="Videogame 1"
        class='group-hover:scale-110 duration-300 my-3'
        >
        <p class='text-sm'>${eletronics.brand}</p>
        <p class='text-sm'>${eletronics.name}</p>
        <p class='text-sm'>$${eletronics.price}</p>
        <button id='adicionar-${
          eletronics.id
        }' class='bg-slate-950 hover:bg-slate-700 text-slate-200'>
        <i class="fa-solid fa-cart-plus"></i>
        </button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cardProduct;
    document.getElementById(`adicionar-${eletronics.id}`);
  }

  for (const eletronics of Product) {
    document
      .getElementById(`adicionar-${eletronics.id}`)
      .addEventListener("click", () => addCart(eletronics.id));
  }
}
