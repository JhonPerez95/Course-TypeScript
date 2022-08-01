"use strict";
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    console.log(fullName('Flash'));
})();
