console.log('Hello from app.js');

const obj = {
    name: 'Mario',
    age: 32,
    job: 'plumber'
}

// console.log(obj);


// Kodą rašo Aivaras

class PlayCharacter {

    constructor(name, age, job, lives) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.speed = 10;
        this.strength = this.age * 2;
        if (lives !== undefined) {
            this.lives = lives;
        }
        
    }
}

// Kodą rašo Gintarė

const obj1 = new PlayCharacter('Mario', 32, 'plumber');
const obj2 = new PlayCharacter('Luigi', 30, 'plumber', 10);

// console.log(obj1, obj2);


// Kodą rašo Aivaras

class TV {

    #channel = 1;

    constructor(price, owner) {
        this.brand = 'Samsung';
        this.model = 'UE55NU7172UXXH';
        this.year = 2018;
        this.price = price;
        this.owner = owner;
        this.turnOn = false;
    }

    ijungti() {
        this.turnOn = true;
        console.log(this.owner + ' turning on the TV and watching channel ' + this.#channel);
    }

    isjungti() {
        this.turnOn = false;
        console.log(this.owner + ' turning off the TV');
    }
    
    // setteris
    perjungtiKanala(channel) {
        if (!this.turnOn) {
            return;
        }
        if (channel < 1 || channel > 100) {
            console.log('Invalid channel');
            return;
        }
        this.#channel = channel;
        console.log(this.owner + ' changing the channel ' + this.#channel);
    }

    // getteris
    ziuretiInformacija() {
        return this.#channel;  
    }

}

// Kodą rašo Gintarė

const tv1 = new TV(400, 'Petras');
const tv2 = new TV(600, 'Jonas');

console.log(tv1, tv2);

tv2.ijungti();
tv2.perjungtiKanala(10);

let info = tv2.ziuretiInformacija();

info++;

tv2.perjungtiKanala(info);

tv2.isjungti();
tv2.ijungti();
