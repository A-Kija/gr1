

fetch('http://localhost:3000/briedis')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const h1 = document.createElement('h1');
        h1.textContent = data.labas;
        document.body.appendChild(h1);
    });



const param = document.querySelector('#param');
const color = param.querySelector('[type="color"]');
const range = param.querySelector('[type="range"]');

param.querySelector('button').addEventListener('click', _ => {

    const colorWithoutHash = color.value.slice(1);

    fetch(`http://localhost:3000/briedis/${colorWithoutHash}/${range.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const h1 = document.querySelector('h1');
            h1.style.color = '#' + data.spalva;
            h1.style.fontSize = data.dydis + 'px';
        });
});


const query = document.querySelector('#query');
const color1 = query.querySelector('[type="color"]');
const range1 = query.querySelector('[type="range"]');

query.querySelector('button').addEventListener('click', _ => {

    const colorWithoutHash = color1.value.slice(1);

    fetch(`http://localhost:3000/briedis1?color=${colorWithoutHash}&size=${range1.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const h1 = document.querySelector('h1');
            h1.style.color = '#' + data.spalva;
            h1.style.fontSize = data.dydis + 'px';
        });
});