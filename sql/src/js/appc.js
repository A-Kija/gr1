import axios from 'axios';

const clientsUl = document.querySelector('#clients ul');
const phonesUl = document.querySelector('#phones ul');

const readClients = _ => {

    axios.get('http://localhost:6457/read-clients')
        .then(res => {
            clientsUl.innerHTML = '';
            res.data.forEach(client => {
                const clone = document.querySelector('[data-c-list]').content.cloneNode(true);
                const id = clone.querySelector('[data-c-id]');
                const name = clone.querySelector('[data-c-name]');
                id.innerText = client.id + '.';
                name.innerText = client.name;
                clientsUl.appendChild(clone);
            });

        });

};

const readPhones = _ => {

    axios.get('http://localhost:6457/read-phones')
        .then(res => {
            clientsUl.innerHTML = '';
            res.data.forEach(client => {
                const clone = document.querySelector('[data-p-list]').content.cloneNode(true);
                const id = clone.querySelector('[data-c-id]');
                const name = clone.querySelector('[data-c-name]');
                id.innerText = client.id + '.';
                name.innerText = client.name;
                clientsUl.appendChild(clone);
            });

        });

};

readClients();