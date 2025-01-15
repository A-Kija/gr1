console.log('Kartojimas JS');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let rezultatas = 1 == 1 ? 'TAIP' : 'NE';


let pirmas;
// 1. rand funkcija sugeneruoti skaičių intervale nuo 0 iki 4. Jeigu skačius yra 0, 1 arba 2
// kintamajam pirmas priskirti raidę "A", kitu atveju raidę "B". Naudoti ternary operatorių. Viena eilute.
let r1 = rand(0, 4);
pirmas = r1 < 3 ? 'A' : 'B';
console.log(r1, pirmas);

let antras;
// 2. rand funkcija sugeneruoti skaičių intervale nuo 1 iki 20. Jeigu skačius yra 5, 10, 15 arba 20
// kintamajam antras priskirti raidę "A", kitu atveju raidę "B". Naudoti ternary operatorių. Viena eilute.

let r2 = rand(1, 20);
antras = r2 % 5 ? 'B' : 'A';

console.log(r2, antras);

let trecias = [];
// 3. Sukurti masyvą iš 5 elementų. kiekvienas elementas random skaičius nuo 5 iki 25. Naujo elemento pridėjimui NAUDOTI rest operatorių.

for (let i = 0; i < 5; i++) {
    trecias = [...trecias, rand(5, 25)];
}

console.log(trecias);

const A = ['A', 'A'];
const B = ['B', 'B'];
const AB = [...A, '*', ...B, '*', ...A];
console.log(AB);

let ketvirtas = [];
// 4. Sukurti masyvą [5, 4, 3, 2, 1, 1, 2, 3, 4, 5] NAUDOTI rest operatorių ir for ciklą su 5 iteracijomis.

for (let i = 0; i < 5; i++) {
    ketvirtas = [i + 1, ...ketvirtas, i + 1];
}

console.log(ketvirtas);

const skaiciai = [45, 6, 87, 20, 47, 33, 1, 8, 99, 100];
// 5. Sukurti naują masyvą pagal duotą, kuriame skaičiai išrūšiuoti nuo didžiausio iki mažiausio. Nenaudoti rest operatoriaus.

const penktas = skaiciai.toSorted((a, b) => b - a);

console.log(penktas);

// 6. Sukurti naują masyvą pagal duotą, kuriame kiekvienas elementas vienetu didesnis už pradinį masyvą.

const sestas = skaiciai.map(n => n + 1);

console.log(sestas);

// 7. Sukurti naują masyvą pagal duotą, kuriame kiekvienas elementas didesnis nei 50 virsta "A", pasilieka nepakitę. Naudojame map ir ternary operatorių.

const septintas = skaiciai.map(n => n > 50 ? 'A' : n);

console.log(septintas);

const gyvuliai = [
    {id: 10, vardas: 'Rex', amzius: 5, veisle: 'Lietuvos lenciuginis' },
    {id: 68, vardas: 'Pukis', amzius: 3, veisle: 'Lietuvos lenciuginis' },
    {id: 35, vardas: 'Snekutis', amzius: 1, veisle: 'Zalvarinis retriveris' },
    {id: 45, vardas: 'Murka', amzius: 2, veisle: 'Lietuvos patvorinis' },
    {id: 41, vardas: 'Sniegė', amzius: 7, veisle: 'Lietuvos pagalvinis' },
    {id: 98, vardas: 'Bebras', amzius: 3, veisle: 'Lietuvos medinis' },
];

// 8. Sukurti naują masyvą pagal duotą, kuriame gyvuliai išrūšiuoti nuo vyriausio iki jauniausio. Nenaudoti rest operatoriaus.

const astuntas = gyvuliai.toSorted((a, b) => b.amzius - a.amzius);

console.log(astuntas);

const astuntasPliusVardas = gyvuliai.toSorted((a, b) => {
    if (a.amzius > b.amzius) {
        return 1;
    }
    if (a.amzius < b.amzius) {
        return -1;
    }
    return a.vardas.localeCompare(b.vardas);
});

console.log(astuntasPliusVardas);

console.clear();


const fun1 = (a, b) => a + b;
const fun2 = (a, b) => a + b;




console.log(fun1 === fun2);



