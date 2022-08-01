"use strict";
;
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        if (upper) {
            return `${firstName.toUpperCase()} ${lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase()}`;
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
    };
    console.log(fullName('Flash', 'Gordon', false));
})();
