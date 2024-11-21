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
