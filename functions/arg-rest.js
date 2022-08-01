"use strict";
;
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(' ')}`;
    };
    console.log({ dev: fullName('Jhon', 'Jainer', 'Perez') });
})();
