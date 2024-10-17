
console.log('Hello, Bebrai!');

console.log(4 + 5 * 7);

const manoPirmasSkaicius = 42;
const manoAntrasSkaicius = 3.14;

let manoPirmojiSuma = manoPirmasSkaicius + manoAntrasSkaicius;

manoPirmojiSuma = manoPirmojiSuma + 100;

{

    let manoPirmojiSuma = 'Labas';
    console.log(manoPirmojiSuma);

    {

        let manoPirmojiSuma = 'Viso gero';
        console.log(manoPirmojiSuma, typeof manoPirmojiSuma);
    
    }

}


// console.log('%c'+ manoPirmojiSuma, 'color: red; font-size: 20px;');

console.log(manoPirmojiSuma, typeof manoPirmojiSuma);


let koksTipas1 = 1 + 1;
let koksTipas2 = 1 + '1';
koksTipas2 = koksTipas2 + 2;

console.log(koksTipas1, typeof koksTipas1);
console.log(koksTipas2, typeof koksTipas2);

const as = {};

as.vardas = 'Jonas';
as.pavarde = 'Jonaitis';

as.apie = {};

as.apie.amzius = 99;
as.apie.miestas = 'Vilnius';


console.log(as, typeof as);


const ManoH1 = document.querySelector('h1');

ManoH1.innerText = manoPirmojiSuma;

ManoH1.style.color = 'crimson';


// console.log(ManoH1);