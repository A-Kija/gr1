console.log('---------- 22 ----------');

class Troleibusas {

    static visiKeleiviai = 0;
    static troleibusai = [];

    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log('Viso yra:' + this.visiKeleiviai);
        this.troleibusai.forEach(troleibusas => troleibusas.vaziuoja());
    }

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    static visiLauk() {
        this.troleibusai.forEach(troleibusas => troleibusas.islipa(troleibusas.keleiviuSkaicius));
    }

    constructor() {
        this.keleiviuSkaicius = 0;
        this.constructor.troleibusai.push(this);
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius) {
        const liko = Math.max(this.keleiviuSkaicius - keleiviuSkaicius, 0);
        this.constructor.bendrasKeleiviuSkaicius(liko - this.keleiviuSkaicius);
        this.keleiviuSkaicius = liko;
    }

    vaziuoja() {
        console.log('Troleibusu keleiviu skaicius: ' + this.keleiviuSkaicius);
    }
}

const troleibusas1 = new Troleibusas();
troleibusas1.ilipa(5);
troleibusas1.islipa(2);
troleibusas1.ilipa(3);

const troleibusas2 = new Troleibusas();
troleibusas2.ilipa(10);
troleibusas2.islipa(5);

const troleibusas3 = new Troleibusas();
troleibusas3.ilipa(7);
troleibusas3.islipa(5);

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

Troleibusas.visiLauk();

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

console.clear();

class Elektra {

    constructor() {
        this.elektra = 'AC220v';
    }

}


class TV extends Elektra {

    constructor(savininkas) {
        super();
        this.istrizaine = 55;
        this.savininkas = savininkas;
    }

    rodytiPrograma() {
        console.log('Tėvo programa');
    }
}

class TVSamsung extends TV {

    constructor(savininkas) {
        super(savininkas);
        this.modelis = 'Samsung';
        this.istrizaine = 65;
        this.elektra = 'AC110v';
    }
}

class TVSony extends TV {

    constructor(savininkas) {
        super(savininkas);
        this.modelis = 'Sony';
    }

    rodytiPrograma() {
        console.log('Sony programa');
    }
}

const tv1 = new TVSamsung('Jonas');
const tv2 = new TVSony('Petras');

tv1.rodytiPrograma();
tv2.rodytiPrograma();

console.log(tv1);
console.log(tv2);

console.clear();


class Cart {

    static instance;

    static createCart() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }

    constructor() {
        this.items = [];
    }

    add(product) {
        this.items.push(product);
    }

    #doSomething() {
        console.log('Do something');
    }
}


const cart = Cart.createCart();
const cart2 = Cart.createCart();


cart.add('Duona');
cart.add('Pienas');
cart2.add('Sviestas');
cart2.add('Kefyras');

console.log(cart, cart2);

console.clear();

class Stikline {    

    constructor(turis) {
        this.kiekis = 0;
        this.turis = turis;
    }

    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
    }

    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }

    stiklinejeYra() {
        console.log(`Stiklineje, kurios tūris ${this.turis} yra ${this.kiekis} skysčio`);
    }

}

const stikline100 = new Stikline(100);
const stikline150 = new Stikline(150);
const stikline200 = new Stikline(200);


stikline100.ipilti(stikline150.ipilti(stikline200.ipilti(500).ispilti()).ispilti());

stikline100.stiklinejeYra();
stikline150.stiklinejeYra();
stikline200.stiklinejeYra();


console.clear();


class Grybas {

    constructor() {
        this.svoris = this.#rand(5, 45);
        this.valgomas = !this.#rand(0, 1);
        this.sukirmijes = !this.#rand(0, 1);
    }

    #rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

}

class Krepsys {

    constructor() {
        this.prideta = 0;
        this.dydis = 500;
    }

    deti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prideta += grybas.svoris;
        }
        return 500 > this.prideta;
    }
}

const krepsys = new Krepsys();

do {} while(krepsys.deti(new Grybas()));

console.log(krepsys);

console.clear();

const manoMap = new Map();

manoMap.set('vardas', 'Jonas'); // key, value
manoMap.set('pavarde', 'Jonaitis');
manoMap.set('amzius', 99);
manoMap.set({a: 1}, 'Petras');
manoMap.set('vardas', 'Jolanta');
manoMap.set({a: 1}, 'Antanas');
manoMap.set(function(){return 2}, 'Jonas');
manoMap.set([1, 2, 3], 'Jonas');
manoMap.delete('vardas');

console.log(manoMap.size);

console.log(manoMap);

console.log(manoMap.get('vardas')); // Jolanta
console.log(manoMap.get({a: 1}));

const objektas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 99
};

console.log(objektas);

manoMap.forEach((value, key) => {
    console.log(key, value);
});

console.clear();

const manoSetas = new Set();

manoSetas.add('Jonas');
manoSetas.add('Jonas');
manoSetas.add('Jonas');
manoSetas.add('Petras');
manoSetas.add('Antanas');

console.log(manoSetas);

console.log(manoSetas.has('Jonas'));    // true

// manoSetas.delete('Jonas');

// console.log(manoSetas.has('Jonas'));



