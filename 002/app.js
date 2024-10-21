function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


console.log('Veikia');

const pTag = document.querySelector('p');

pTag.style.color = 'skyblue';

const text = pTag.innerText;

console.log(text);

pTag.innerText = 'Labas rytas';


const color = pTag.style.color;

console.log(color);

const A = 300;
const B = 300;

const t = true;
const f = false;

console.log(typeof t);

if (B > A) {
    console.log('B didesnis');
} else if (A > B) {
    console.log('A didesnis');
} else {
    console.log('Lygu');
}



const Z = rand(1, 10);
const X = rand(1, 10);
const Y = rand(1, 10);

// 

// const Z = 200;
// const X = 200;
// const Y = 200;

console.log('Z:', Z, 'X:', X, 'Y:', Y);


if (Z > X) {
    if (Z > Y) {
        console.log('Z didziausas');
    } else if (Z == Y) {
        console.log('Y ir Z didziausas');
    } else {
        console.log('Y didziausas');
    }
} else if (X > Z) {
    if (X > Y) {
        console.log('X didziausas');
    } else if (X == Y) {
        console.log('X ir Y didziausas');
    } else {
        console.log('Y didziausas');
    }
}
else if (Z == X) {
    if (Z > Y) {
        console.log('Z ir X didziausi');
    } else if (Z == Y) {
        console.log('Z, X ir Y lygus');
    } else {
        console.log('Y didziausas');
    }
}


// Refactored
if (Z == X && X == Y) {
    console.log('Z, X ir Y lygus');
} else if (Z >= X && Z >= Y) {
    if (Z == X) {
        console.log('Z ir X didziausi');
    } else if (Z == Y) {
        console.log('Z ir Y didziausi');
    } else {
        console.log('Z didziausas');
    }
} else if (X >= Z && X >= Y) {
    if (X == Y) {
        console.log('X ir Y didziausi');
    } else {
        console.log('X didziausas');
    }
} else {
    console.log('Y didziausas');
}




if (1 === '1') {
    console.log('Lygu');
} else {
    console.log('Nelygu');
}