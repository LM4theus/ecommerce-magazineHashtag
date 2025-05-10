/*

id, name, brand, price, image

Indices númericos divididos em Classes:
para facilitar na busca de dados

--- { VideoGames: app00 até app08 }
--- { Notebooks: app09 até app12 }
--- { Televisões: app13 até app17 }
--- { Celulares: app18 até app23 }

*/

const Game = [
    {
        id: 0,
        name: 'Playstation 5',
        brand: 'Sony',
        price: 4000,
        image: 'app00.jpg',
    },
    {
        id: 1,
        name: 'Xbox Series S',
        brand: 'Xbox',
        price: 2500,
        image: 'app01.jpg',
    },
    {
        id: 2,
        name: 'Nintendo Switch',
        brand: 'Nintendo',
        price: 2350,
        image: 'app02.jpg',
    },
    {
        id: 3,
        name: 'PC Gamer',
        brand: 'Pichau',
        price: 6000,
        image: 'app03.jpg'
    },
    {
        id: 4,
        name: 'Playstation 4',
        brand: 'Sony',
        price: 3200,
        image: 'app04.jpg'
    },
    {
        id: 5,
        name: 'Xbox One',
        brand: 'Xbox',
        price: 2500,
        image: 'app05.jpg'
    },
    {
        id: 6,
        name: 'Playstation 2',
        brand: 'Sony',
        price: 300,
        image: 'app06.jpg'
    },
    {
        id: 7,
        name: 'Playstation 3',
        brand: 'Sony',
        price: 1200,
        image: 'app07.jpg'
    },
    {
        id: 8,
        name: 'Xbox 360',
        brand: 'Xbox',
        price: 1100,
        image: 'app08.jpg'
    }
];

const Notebook = [
    {
        id: 9,
        name: 'Notebook HP SSD 500GB 6GB RAM',
        brand: 'HP',
        price: 1950,
        image: 'app09.jpg'
    }
    ,
    {
        id: 10,
        name: 'Notebook Asus HD 1TB 6GB RAM',
        brand: 'Asus',
        price: 2200,
        image: 'app10.jpg'
    }
    ,
    {
        id: 11,
        name: 'Notebook Accer HD 500GB 4GB RAM',
        brand: 'Accer',
        price: 1650,
        image: 'app11.jpg'
    }
    ,
    {
        id: 12,
        name: 'Notebook Samsung HD 500GB 8GB RAM',
        brand: 'Xbox',
        price: 1780,
        image: 'app12.jpg'
    }
]

const Tv = [
    {
        id: 13,
        name: 'SmartTV LG UHD 60',
        brand: 'LG',
        price: 3200,
        image: 'app13.jpg'
    }
    ,
    {
        id: 14,
        name: 'SmartTV Samsung 60',
        brand: 'Samsung',
        price: 2999,
        image: 'app14.jpg'
    }
    ,
    {
        id: 15,
        name: 'SmarTV Samsung 40',
        brand: 'Samsung',
        price: 1980,
        image: 'app15.jpg'
    }
    ,
    {
        id: 16,
        name: 'SmarTV Philips 80',
        brand: 'Philips',
        price: 4789,
        image: 'app16.jpg'
    }
    ,
    {
        id: 17,
        name: 'SmarTV Samsung 55',
        brand: 'Samsung',
        price: 2690,
        image: 'app17.jpg'
    }
]

const Phone = [
    {
        id: 18,
        name: 'Iphone 11Pro',
        brand: 'Apple',
        price: 4500,
        image: 'app18.jpg'
    }
    ,
    {
        id: 19,
        name: 'Iphone 12Pro',
        brand: 'Apple',
        price: 5200,
        image: 'app19.jpg'
    }
    ,
    {
        id: 20,
        name: 'Iphone 12Pro Max',
        brand: 'Iphone',
        price: 5600,
        image: 'app20.jpg'
    }
    ,
    {
        id: 21,
        name: 'Xiaomi Redmi Note 12',
        brand: 'Xiaomi',
        price: 2300,
        image: 'app21.jpg'
    }
    ,
    {
        id: 22,
        name: 'Xiaomi Redmi Mi 10T',
        brand: 'Xiomi',
        price: 1100,
        image: 'app22.jpg'
    }
    ,
    {
        id: 23,
        name: 'Samsung Galaxy S23 Ultra',
        brand: 'Samsung',
        price: 3200,
        image: 'app23.jpg'
    }
]

for (const videogame of Game){
  
    const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${Game.id}">
    <img 
      src="./assets/${videogame.image}" 
      alt="Videogame 1"
      style="height: 300px;"
    >
    <p class='marca'>${videogame.brand}</p>
    <p>${videogame.name}</p>
    <p>$${videogame.price}</p>
    <button>Adicionar</button>
    </div>`;
    
    document.getElementById('container-produto').innerHTML += cartaoProduto;  
    }


    