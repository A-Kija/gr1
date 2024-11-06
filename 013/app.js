

// 1. Padaryti mygtuką, kurį paspaudus jis pranyksta.

const btn1 = document.querySelector('#nr1');

btn1.addEventListener('click', _ => {
    console.log('paspaustas');
    if (btn1.dataset.buttonStatus == 'on') {
        btn1.style.opacity = 0;
        btn1.dataset.buttonStatus = 'off';
    } else {
        btn1.style.opacity = 1;
        btn1.dataset.buttonStatus = 'on';
    }
});

// 2. Sekcijoje nr2 sukurti 9 kvadratus. Paspaudus kvadratą jis turi pakeisti savo spalvą.


const settings = {
    count: 900,
    size: 10,
    color1: 'skyblue',
    color2: 'pink',
    event: 'mouseover'
}


const sqColors = (targetId, settings) => {
    const target = document.querySelector('#' + targetId);

    const targetWidth = Math.sqrt(settings.count) * settings.size + 'px';
    target.style.width = targetWidth;

    for (let i = 0; i < settings.count; i++) {
        const div = document.createElement('div');
        div.style.width = settings.size + 'px';
        div.style.height = settings.size + 'px';
        div.style.backgroundColor = settings.color1;
        div.dataset.status = '1';
        div.addEventListener(settings.event, _ => {
            if (div.dataset.status == '1') {
                div.style.backgroundColor = settings.color2;
                div.dataset.status = '2';
            } else {
                div.style.backgroundColor = settings.color1;
                div.dataset.status = '1';
            }
        });
        target.appendChild(div);
    }
}

sqColors('nr2', settings);
    
