console.log('function.js 1');

function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function suma(a, b) {

    // return a;

    a = parseInt(a);
    console.log('Suma:', a + b);
    // for (let i = 0; i < 10; i++) {
    //     console.log('i:', i);
    // }

    const c = a + b;

    return c;
}

const skirtumas = function (a, b) {
    console.log('Skirtumas:', a - b);
}

const sandauga = (a, b) => {
    console.log('Sandauga:', a * b);
}

// this


console.log('function.js 2');

skirtumas(10, 5);
sandauga(10, 5);

let abs = 8

// suma(abs, 3);
// suma(abs, 7);

// console.log(suma('10', 20));

const manoSuma = suma;

manoSuma(10, 20);

console.log('manoSuma:', typeof manoSuma);

