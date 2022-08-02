"use strict";
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
    console.log(newMutant.mutantPower(2));
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
//# sourceMappingURL=main.js.map