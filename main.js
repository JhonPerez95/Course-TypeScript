"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log('...... gogogo!!!');
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log('JAJAJAJA');
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(` ${this.nombre} tiene ${this.edad} años, es ${this.sexo}`);
    }
}
const newPersona = new Persona('Jhon', 26, 'M', true);
console.log(newPersona);
newPersona.imprimirBio();
;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'super strength', 'flight'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['super strength', 'flight', 'x-ray vision'],
        getName() {
            return this.name;
        },
    };
})();
;
(() => {
    class Xmen {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `${this.name} ${id}`;
        }
    }
    const newMutant = new Xmen('Jhon', 'Flash', 26);
})();
;
(() => {
    const client = {
        name: 'Jhon',
        email: 'jhon@example.com',
        address: {
            id: 123,
            zip: 'KSDF 3 SED',
            city: 'Berlin',
        },
        getFullAddress() {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Angie',
        email: 'Angie@example.com',
        address: {
            id: 123,
            zip: 'KSDF 3 SED',
            city: 'Berlin',
        },
        getFullAddress() {
            return this.address.city;
        },
    };
})();
;
(() => {
    let addNumberFunction;
    addNumberFunction = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map