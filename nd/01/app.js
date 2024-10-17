console.log('Pradedam!');

// 1

const tagH3 = document.querySelector('h3');

tagH3.innerText = 3;



// 2

const div1 = document.querySelector('div:nth-of-type(1)');
const div2 = document.querySelector('div:nth-of-type(2)');

div1.innerText = 1;
div2.innerText = 2;


// 6 span find

const span6 = document.querySelector('section#go6 [data-amount] span');

span6.innerText = 6;