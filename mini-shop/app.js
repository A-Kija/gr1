const C = [
    {
        id: 1,
        img: './images/kede.jpg',
        title: 'Kedė',
        price: 50,
        quantity: 4
    },
    {
        id: 2,
        img: './images/stalas.jpg',
        title: 'Stalas',
        price: 100,
        quantity: 2
    },
    {
        id: 3,
        img: './images/sofa.jpg',
        title: 'Sofa',
        price: 200,
        quantity: 3
    },
    {
        id: 4,
        img: './images/komoda.jpg',
        title: 'Komoda',
        price: 150,
        quantity: 1
    }
];

const cartItemHtml = `
                        <li>
                            <img src="${img}" alt="${title}">
                            <div class="info">
                                <h3>${title}</h3>
                                <p>${price.toFixed(2)} €</p>
                                <p>Quantity: ${quantity}</p>
                            </div>
                            <button>X</button>
                        </li>
                        `;