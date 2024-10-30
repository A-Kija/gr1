console.log('app.js 009');


// 1. Sukurti funkciją, kuri priima 2 kintamuosius ir grąžina jų didesnį.


const fun1 = (a, b) => {
    const rez = (a > b) ? a : b; // ternary operator
    return rez;
}

const fun1If = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

const fun1IfGeras = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}


console.log(fun1(25, 18));
console.log(fun1If(25, 18));
console.log(fun1IfGeras(25, 18));


// 2. Sukurti funkciją, kuri priima 2 stringus įrašytus į kintamuosius ir grąžina trumpesnį.

const fun2 = (a, b) => {
    if (a.length < b.length) {
        return a;
    }
    return b;
}

console.log(fun2('labas', 'pats tu toks geras'));


// 3. Sukurti funkciją, kuri priima 2 kintamuosius. Jeigu didesnis pirmas grąina 1, jeigu didesnis antras grąžina -1, jeigu lygūs grąžina 0.


const fun3 = (a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}

const funTer3 = (a, b) => {
    return a > b && a != b ? 1 : a < b && a != b ? -1 : 0;
}


console.log(fun3(25, 18));
console.log(funTer3(25, 88));



function funSum1(a, b) {
    return a + b;
}

const funSum2 = function (a, b) {
    return a + b;
}

const funSum3 = (a, b) => {
    return a + b;
}

const funSum4 = (a, b) => a + b;


console.log(funSum4(2, 3));


function funBig1(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

const funBig2 = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

const funBig3 = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}

const funBig4 = (a, b) => a > b ? a : b;


console.log(funBig4(2, 3));


function funStrLen1(a) {
    return a.length;
}

const funStrLen2 = function (a) {
    return a.length;
}

const funStrLen3 = (a) => {
    return a.length;
}

const funStrLen4 = a => a.length;


function FunReturnLabas1() {
    return 'labas';
}

const FunReturnLabas2 = function () {
    return 'labas';
}

const FunReturnLabas3 = () => {
    return 'labas';
}

const FunReturnLabas4 = _ => 'labas';


console.log(FunReturnLabas4());


const fun3sum1 = (a, b, c = 20) => {
    return a + b + c;
}

// console.log(fun3sum1(1));
console.log(fun3sum1(1, 2));
console.log(fun3sum1(1, 2, 3));



const funSumMany1 = (...rest) => {

    let sumAll = 0;
    for (let i = 0; i < rest.length; i++) {
        sumAll += rest[i];
    }
    return sumAll;
}


console.log(funSumMany1(3, 1, 2, 3, 7, 8, 55, 10, 11));


const animals = ['cat', 'dog', 'elephant', 'lion', 'tiger'];

const animals2 = [...animals];

const animals3 = animals;

animals[0] = 'bear';
animals2[1] = 'wolf';

console.log(animals2, animals3);





