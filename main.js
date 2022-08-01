"use strict";
;
(() => {
    const avenger = {
        iroman: 'Robert Downey Jr',
        isActive: true,
        nick: 'Samuel L. Jackson',
        poder: 1500,
        vision: 'Paul Bettany',
    };
    const { iroman, isActive, poder } = avenger;
    console.log({
        iroman: iroman.toUpperCase(),
        isActive,
        poder: (poder / 4.5).toFixed(1),
    });
    const prinAvenger = ({ poder, vision }) => {
        console.log(`${poder} ${vision}`);
    };
    prinAvenger(avenger);
    1;
    const avengerArr = ['Cap. America', 'Iroman', 'Thor', 'Hulk'];
    const Iroman = avengerArr[1];
    console.log(Iroman);
    const [, iromanArr] = avengerArr;
    console.log(iromanArr);
})();
;
(() => {
    const iroman = { name: 'iroman', weapon: 'ArmorSuit' };
    const capAmerica = { name: 'Cap America', weapon: 'Shield' };
    const thor = { name: 'Thor ', weapon: 'Mjolnir' };
    const avengers = [iroman, capAmerica, thor];
    for (const item of avengers) {
        console.log(item.name);
    }
    for (const key in iroman) {
        console.log(key);
    }
})();
;
(() => {
    var a = 'Jhon';
    const NAME = 'Jhon';
})();
