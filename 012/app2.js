document.querySelector('#btn1').addEventListener('click', e => {
    console.log('Button 1 clicked', e.target);
});

document.querySelector('#btn1').addEventListener('dblclick', e => {
    console.log('Button 1 dbclicked');
});

for (let i = 0; i < 10; i++) {
    document.querySelector('#btn2').addEventListener('click', e => {
        console.log('Button 2 clicked');
    });
}

window.addEventListener('scroll', e => {
    console.log('Scrolling', window.scrollY);
});

document.querySelector('#btn2').addEventListener('scroll', e => {
    console.log('Scrolling button 2');
});

document.querySelector('#btn3').addEventListener('click', e => {
    e.preventDefault();
    console.log('Link clicked');
});

document.querySelector('.tevas').addEventListener('click', e => {
    document.querySelector('.tevas').style.backgroundColor = 'darkred';
});

document.querySelector('.vaikas').addEventListener('click', e => {
    e.stopPropagation();
    // document.querySelector('.vaikas').style.backgroundColor = 'darkblue';
});