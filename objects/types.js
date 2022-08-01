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
    console.log({ flash, superman });
    // superman.getName()
})();