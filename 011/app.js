console.log('app.js');

// 1. Nuspalvinti Visus žodžius iš NR1 sekcijos raudonai. Naudoti forEach.

document.querySelectorAll('#nr1 div').forEach(div => div.style.color = 'crimson');


/*
-------------------------------------------------------
*/


// 2. Nuspalvinti visus žodžius iš NR1 sekcijos mėlynai, kurie prasideda raide "J". Naudoti forEach.


// document.querySelectorAll('#nr1 div').forEach(div => {
//     if (div.innerText[0] == 'J') {
//         div.style.color = 'skyblue';
//     }
// });

// one liner

document.querySelectorAll('#nr1 div').forEach(div => div.innerText[0] == 'J' && (div.style.color = 'skyblue'));

const obj = {
    person: {
        name: 'Jonas',
        age: 99,
        car: {
            model: 'Volvo'
        },
        motocycle: {
            model: 'Yamaha'
        }
    }
};

// console.log(obj.person.car.model);


console.log(1 && 2 && '' && 4 && 5);

console.log(0 || 0 || '' || 4 || 5);


let reiksme;

console.log(reiksme ?? 'Nera reiksmes');

console.log(obj.person.car?.model ?? 'neturi masinos');



// 3. Nuspalvinti visus skaičius iš NR2 sekcijos mėlynai, kurie yra didesni nei 10. Naudoti forEach.


document.querySelectorAll('#nr2 div').forEach(div => {
    if (div.innerText > 10) {
        div.style.color = 'skyblue';
    }
});

// 4. Prie visų skaičių iš NR2 sekcijos pridėti 7. Naudoti forEach.

// document.querySelectorAll('#nr2 div').forEach(div => {
//     div.innerText = parseFloat(div.innerText) + 7;
// });

// one liner    
document.querySelectorAll('#nr2 div').forEach(div => div.innerText = parseFloat(div.innerText) + 7);


const I = document.querySelector('#I');
const Ia = document.querySelector('#Ia');

I.innerHTML = '<h2 style="color: skyblue;">Bebras1</h2>';
Ia.innerHTML = '<h2 style="color: skyblue;">Bebras1</h2>';

const II = document.querySelector('#II');
const IIa = document.querySelector('#IIa');

const h2 = document.createElement('h2');
h2.style.color = 'skyblue';
const text = document.createTextNode('Bebras2');
h2.appendChild(text);

// clone

const h2Clone = h2.cloneNode(true);

// const h2Clone = h2;


II.appendChild(h2);
IIa.appendChild(h2Clone);


const m1 = [1, 2, [100, 200, 300], 4, 5];

const m2 = m1;
const m3 = [...m1];
const m4 = structuredClone(m1);

m2[0]++;
m3[0]++;
m1[2][0]++;
m4[2][0]++;

console.log(m1);


const mas1 = [1, 2, 3, 4, 5];

mas1.forEach((el, i) => {
    console.log(i, el);
});

const mas2 = mas1.map(el => {
    return el * 2;
});

console.log(mas2);


const mas3 = mas1.filter(el => {
    return el > 2;
});

console.log(mas3);

const mas4 = mas1.map(el => el * 2).filter(el => el > 5);

console.log(mas4);

mas1[5] = 'Bebras';

mas1.push('Jonas');

mas1.unshift('Ona', 'Petras');

mas1.pop();

mas1.shift();

const mas1WO3 = mas1.filter(el => el != 3);


console.log(mas1WO3);



