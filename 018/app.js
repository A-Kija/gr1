
const size = 'M11';

// if (size === 'S') {
//     console.log('S');
// }
// if (size === 'S' || size === 'M') {
//     console.log('M');
// }
// if (size === 'S' || size === 'M' || size === 'L') {
//     console.log('L');
// }
// if (size === 'S' || size === 'M' || size === 'L' || size === 'XL') {
//     console.log('XL');
// }

const wtf = 'のとき、どのコンソールログが出力されるか選択してください';


switch (size) {
    case 'S':
        console.log('S');
    case 'M':
        console.log('M');
    case 'L':
        console.log('L');
    case 'XL':
        console.log('XL');
        break;
    default:
        console.log(wtf);
}


const letter = 'Z';

// if (letter === 'A') {
//     console.log('A');
// } else if (letter === 'B') {
//     console.log('B');
// } else if (letter === 'C') {
//     console.log('C');
// } else {
//     console.log('D');
// }


switch (letter) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    default:
        console.log('D');
}

console.log(1 + '1');
console.log(1 - '1');
console.log(1 - true);
console.log(1 + true);

// while (true) {
//     console.log('無限ループ');
//     break;
// }


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


let moneta1;
let moneta2;
let saugiklis = 50;

do {

    moneta1 = rand(0, 1) ? 'S' : 'H';
    moneta2 = rand(0, 1) ? 'S' : 'H';
    console.log(moneta1, moneta2);

    if (--saugiklis < 0) {
        console.log('BOOM');
        break;
    }

} while (moneta1 != 'H' || moneta2 != 'H');


/* invert

== <---> !=
=== <---> !==
>  <---> <=
<  <---> >=
|| <---> &&

*/


let jonasTuri = 0;

const mociuteDave = rand(300, 700);

jonasTuri += mociuteDave;

console.log('po gimtadienio:', jonasTuri);

while (jonasTuri <= 500) {
    console.log('Jonas važiuoja');
    const uzdirbo = rand(20, 100);
    jonasTuri += uzdirbo;
}

console.log(jonasTuri);

const masyvas = ['blue', 'red', 'green', 'yellow', 'black', 'white'];


// for (let i = 0; i < masyvas.length; i++) {
//     console.log(masyvas[i]);
// }

// for (let i in masyvas) {
//     console.log(masyvas[i]);
// }


// for (let color of masyvas) {
//     console.log(color);
// }

const objektas = {
    color: 'blue',
    weight: 100,
    height: 200,
    width: 300
};

// const raktukas = 'color';
// objektas[raktukas] === objektas.color

const { color: spalva, width: plotis, sss: nera = 'jo nera' } = objektas;

console.log(spalva, plotis, nera);


// for (let raktukas in objektas) {
//     console.log(raktukas, objektas[raktukas]);
// }