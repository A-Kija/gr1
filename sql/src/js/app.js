import axios from 'axios';

const readUl = document.querySelector('#read ul');

const read = _ => {

    axios.get('http://localhost:6457/read')
        .then(res => {
            readUl.innerHTML = '';
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

};

const create = _ => {
    const name = document.querySelector('#create [data-name]').value;
    const height = parseFloat(document.querySelector('#create [data-height]').value);
    const type = document.querySelector('#create [data-type]').value;

    axios.post('http://localhost:6457/create', { name, height, type })
        .then(res => {
            console.log(res.data);
            read();
        });
};


const destroy = _ => {

    const id = document.querySelector('#delete [data-id]').value;

    axios.delete('http://localhost:6457/delete/' + id)
        .then(res => {
            console.log(res.data);
            read();
        });
    
};

const edit = _ => {
    
    const id = document.querySelector('#edit [data-id]').value;
    const name = document.querySelector('#edit [data-name]').value;
    const height = parseFloat(document.querySelector('#edit [data-water]').value);

    axios.put('http://localhost:6457/update/' + id, { height, name })
        .then(res => {
            console.log(res.data);
            read();
        });
    
}

read();

const createButton = document.querySelector('#create button');
createButton.addEventListener('click', create);

const destroyButton = document.querySelector('#delete button');
destroyButton.addEventListener('click', destroy);

const editButton = document.querySelector('#edit button');
editButton.addEventListener('click', edit);


const formHeight = document.querySelector('[data-height]');
const formHeightShow = document.querySelector('[data-height-show]');
formHeight.addEventListener('input', _ => {
    formHeightShow.innerText = parseFloat(formHeight.value).toLocaleString('lt-LT');
});

const formWater = document.querySelector('[data-water]');
const formWaterShow = document.querySelector('[data-water-show]');
formWater.addEventListener('input', _ => {
    formWaterShow.innerText = parseFloat(formWater.value).toLocaleString('lt-LT');
});