console.log('BEBRAS');


const nr1 = document.querySelector('#nr1');

const kiekLegoReikia = 7; // max 11

let sqDivs = '';

for (let i = 0; i < 11; i++) {

    // if (i >= kiekLegoReikia) {
    //     break;
    // }

    sqDivs += '<div>';

    for (let j = 0; j < 4; j++) {
        sqDivs += '<span></span>';
        // if ((i + 0) % 4 === 0) {
        //     break;
        // }
        // if (j >= 1 && (i + 3) % 4 === 0) {
        //     break;
        // }
        // if (j >= 2 && (i + 2) % 4 === 0) {
        //     break;
        // }

    }

    sqDivs += '</div>';

}

nr1.innerHTML = sqDivs;

const pr1 = {
    title: 'Spinta',
    kaina: 152.99,
}

const pr2 = {
    title: 'Lego',
    kaina: 99.99,
}

const prekes = [
    {
        title: 'Spinta',
        kaina: 152.99,
    },
    {
        title: 'Lego',
        kaina: 99.99,
    },
    {
        title: 'Kede',
        kaina: 49.99,
    },
    {
        title: 'Stalas',
        kaina: 99.99,
    }
];

console.log(prekes);

const arr1 = ['bebras', 'kate', 'zuikis', 'pele'];

console.log(arr1, '->', typeof arr1);

console.log(arr1[2]);


const nr2 = document.querySelector('#nr2');

let animals = '';

for (let i = 0; i < arr1.length; i++) {
    animals += `<div>${arr1[i]}</div>`;
}

nr2.innerHTML = animals;

