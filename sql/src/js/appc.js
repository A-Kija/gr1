import axios from 'axios';

const clientsUl = document.querySelector('#clients ul');
const phonesUl = document.querySelector('#phones ul');
const fullUl = document.querySelector('#full ul');

const readClients = _ => {

    axios.get('http://localhost:6457/read-clients')
        .then(res => {
            clientsUl.innerHTML = `
                <li>
                    <span class="tree-id">ID</span>
                    <span class="tree-name">Vardas</span>
                </li>`;
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
            phonesUl.innerHTML = `
                <li>
                    <span class="tree-id">ID</span>
                    <span class="tree-id">CID</span>
                    <span class="tree-name">Numeris</span>
                </li>`;
            res.data.forEach(phone => {
                const clone = document.querySelector('[data-p-list]').content.cloneNode(true);
                const id = clone.querySelector('[data-p-id]');
                const cid = clone.querySelector('[data-c-id]');
                const number = clone.querySelector('[data-p-number]');
                id.innerText = phone.id + '.';
                cid.innerText = phone.client_id + '.';
                number.innerText = phone.number;
                phonesUl.appendChild(clone);
            });

        });

};

const readFull = _ => {
    axios.get('http://localhost:6457/read-full')
        .then(res => {
            fullUl.innerHTML = `
                <li>
                    <span class="tree-id">ID</span>
                    <span class="tree-name">Vardas</span>
                
                    <span class="tree-id">PID</span>
                    <span class="tree-id">CID</span>
                    <span class="tree-name">Numeris</span>
                </li>`;
            res.data.forEach(full => {
                const clone = document.querySelector('[data-f-list]').content.cloneNode(true);
                const cid = clone.querySelector('[data-c-id]');
                const cname = clone.querySelector('[data-c-name]');
                const pid = clone.querySelector('[data-p-id]');
                const cpid = clone.querySelector('[data-cp-id]');
                const pnumber = clone.querySelector('[data-p-number]');

                cid.innerText = full.id + '.';
                cname.innerText = full.name;
                pid.innerText = full.phone_id + '.';
                cpid.innerText = full.client_id + '.';
                pnumber.innerText = full.number;
                fullUl.appendChild(clone);
            });
        });
};

readClients();
readPhones();
readFull();