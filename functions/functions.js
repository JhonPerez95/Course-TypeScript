"use strict";
;
(() => {
    const heroe = 'Flash';
    function returnHeroe() {
        return heroe;
    }
    const activeBatiSingal = () => {
        return 'Batiseñal activada';
    };
    console.log(returnHeroe());
    console.log(typeof activeBatiSingal());
})();
