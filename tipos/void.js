"use strict";
;
(() => {
    // Void es un tipo que no tiene tipo de dato.
    function callBatman() { }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
