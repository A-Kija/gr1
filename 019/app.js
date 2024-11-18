
const section = document.querySelector('section');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => {
        console.log(json)
    
        json.forEach(element => {
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            h3.innerText = element.id + '. ' + element.title;
            p.innerText = element.body;
            div.appendChild(h3);
            div.appendChild(p);
            section.appendChild(div);
        });
    })
    .catch(error => {
        console.log(error);
    });


