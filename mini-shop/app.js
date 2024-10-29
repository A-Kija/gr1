let C = [
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

const cartRender = () => {
    let cartHtml = '';
    C.forEach(item => {
        const { id, img, title, price, quantity } = item;
        const cartItemHtml = `
                        <li>
                            <img src="${img}" alt="${title}">
                            <div class="info">
                                <h3>${title}</h3>
                                <p>${price.toFixed(2)} €</p>
                                <p>Quantity: ${quantity}</p>
                            </div>
                            <button data-id=${id}>X</button>
                        </li>
                        `;
        cartHtml += cartItemHtml;
    });
    document.querySelector('#mini-cart ul').innerHTML = cartHtml;
}

const addEvents = _ => {
    document.querySelectorAll('#mini-cart ul li')
    .forEach(li => {
        const button = li.querySelector('button');
        button.addEventListener('click', _ => {
            const id = button.dataset.id;
            C = C.filter(item => item.id !== parseInt(id));
            cartRender();
            addEvents();
        });
    });
}

cartRender();
addEvents();



// let cartHtml = '';
// for (let i = 0; i < C.length; i++) {
//     const item = C[i];
//     const img = item.img;
//     const title = item.title;
//     const price = item.price;
//     const quantity = item.quantity;
//     const cartItemHtml = `
//                         <li>
//                             <img src="${img}" alt="${title}">
//                             <div class="info">
//                                 <h3>${title}</h3>
//                                 <p>${price.toFixed(2)} €</p>
//                                 <p>Quantity: ${quantity}</p>
//                             </div>
//                             <button>X</button>
//                         </li>
//                         `;
//     cartHtml += cartItemHtml;
// }
// document.querySelector('#mini-cart ul').innerHTML = cartHtml;