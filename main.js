/*
Indices númericos divididos em Classes:
para facilitar na busca de dados

--- { VideoGames: app00 até app08 }
--- { Notebooks: app09 até app12 }
--- { Televisões: app13 até app17 }
--- { Celulares: app18 até app23 }

*/
import { renderProduct } from "./src/cardProduct";
import { StartCart, renderCartProductl, updatePriceCart } from "./src/cartMenu";
import { startFilter } from "./src/filterProduct";

renderProduct();
StartCart();
renderCartProductl();
updatePriceCart();
startFilter();

/*

const cartaoProduto = `<div id="card-produto-1">
<img 
  src="./assets/videogame/${catalogoGames[0].nomeimagem}" 
  alt="Videogame 1"
  style="height: 300px;"
>
<p>${catalogoGames[0].marca}</p>
<p>${catalogoGames[0].nome}</p>
<p>$${catalogoGames[0].preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById('container-produto').innerHTML += cartaoProduto;

*/
