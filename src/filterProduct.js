const productCatalogue = document.getElementById("container-produto");

function filterAll() {
  const allProducts = Array.from(
    productCatalogue.getElementsByClassName("hidden")
  );

  for (const product of allProducts) {
    product.classList.remove("hidden");
  }
}

function hidenGamesPhonesTV() {
  const gamesPhonesTv = [
    Array.from(productCatalogue.getElementsByClassName("videogames")),
    Array.from(productCatalogue.getElementsByClassName("smartphones")),
    Array.from(productCatalogue.getElementsByClassName("tvs")),
  ];

  for (const product of gamesPhonesTv) {
    product.classList.add("hidden");
  }
}

function hidenNotebooksPhonesTV() {
  const notebooksPhonesTv = [
    Array.from(productCatalogue.getElementsByClassName("notebooks")),
    Array.from(productCatalogue.getElementsByClassName("smartphones")),
    Array.from(productCatalogue.getElementsByClassName("tvs")),
  ];

  for (const product of notebooksPhonesTv) {
    product.classList.add("hidden");
  }
}

function hidenGamesNotebooksTV() {
  const gamesnotebooksTv = [
    Array.from(productCatalogue.getElementsByClassName("notebooks")),
    Array.from(productCatalogue.getElementsByClassName("videogames")),
    Array.from(productCatalogue.getElementsByClassName("tvs")),
  ];

  for (const product of gamesnotebooksTv) {
    product.classList.add("hidden");
  }
}

function hidenGamesNotebooksPhones() {
  const gamesNotebooksPhones = [
    Array.from(productCatalogue.getElementsByClassName("videogames")),
    Array.from(productCatalogue.getElementsByClassName("smartphones")),
    Array.from(productCatalogue.getElementsByClassName("notebooks")),
  ];

  for (const product of gamesNotebooksPhones) {
    product.classList.add("hidden");
  }
}

export function startFilter() {
  document.getElementById("exibir-todos").addEventListener("click", filterAll);

  document
    .getElementById("exibir-notebooks")
    .addEventListener("click", hidenGamesPhonesTV);

  document
    .getElementById("exibir-videogames")
    .addEventListener("click", hidenNotebooksPhonesTV);

  document
    .getElementById("exibir-celulares")
    .addEventListener("click", hidenGamesNotebooksTV);

  document
    .getElementById("exibir-televisoes")
    .addEventListener("click", hidenGamesNotebooksPhones);
}
