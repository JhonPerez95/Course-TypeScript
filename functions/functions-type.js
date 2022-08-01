"use strict";
;
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The World is saved`;
    let myFunction;
    myFunction = addNumber;
    console.log({ result: addNumber(1, 2) });
    console.log({ result: myFunction(1, 2) });
    console.log({ result: greet('Jhon') });
    console.log({ result: saveTheWorld() });
})();
