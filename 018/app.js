
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

while (true) {
    console.log('無限ループ');
    break;
}