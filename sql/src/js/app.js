import axios from 'axios';

const readUl = document.querySelector('#read ul');


axios.get('http://localhost:6457/read')
.then(res => {

    console.log(res.data);

    res.data.forEach(tree => {
        const clone = document.querySelector('template').content.cloneNode(true);
        const id = clone.querySelector('[data-id]');
        const name = clone.querySelector('[data-name]');
        const height = clone.querySelector('[data-height]');
        const type = clone.querySelector('[data-type]');
        id.innerText = tree.id + '.';
        name.innerText = tree.name;
        height.innerText = tree.height.toLocaleString('lt-LT') + ' m';
        type.innerText = tree.type;
        readUl.appendChild(clone);
    });

});