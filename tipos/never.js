"use strict";
;
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    error('Error');
    console.log('Hola mundo!');
})();
