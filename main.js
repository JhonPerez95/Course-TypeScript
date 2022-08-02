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
    console.log({ client, client2 });
    console.log(client.getFullAddress());
})();
//# sourceMappingURL=main.js.map