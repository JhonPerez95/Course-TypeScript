"use strict";
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: 'Negra',
    modelo: '6x6',
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: 'Amarillo con negro',
    modelo: '4x2',
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log('Disparando');
    },
};
const villanos = [
    {
        nombre: 'Lex Luthor',
        edad: 54,
        mutante: false,
    },
    {
        nombre: 'Erik Magnus Lehnsherr',
        edad: 49,
        mutante: true,
    },
    {
        nombre: 'James Logan',
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: 'psiquico',
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
;
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
        Fuerza[Fuerza["Batman"] = 1] = "Batman";
        Fuerza[Fuerza["Flash"] = 5] = "Flash";
        Fuerza[Fuerza["Superman"] = 100] = "Superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.Flash;
    const fuerzaSuperman = Fuerza.Superman;
    const fuerzaBatman = Fuerza.Batman;
    const fuerzaAcuaman = Fuerza.Acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
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
;
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(' ')}`;
    };
    console.log({ dev: fullName('Jhon', 'Jainer', 'Perez') });
})();
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    console.log(fullName('Flash'));
})();
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    console.log(fullName('Flash', 'Barry'));
})();
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
;
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Thor';
    console.log(avenger.charAt(0));
})();
;
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(7);
    console.log(numbers);
})();
(() => {
    let isSuperman = false;
    console.log({ isSuperman });
})();
;
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
;
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    error('Error');
    console.log('Hola mundo!');
})();
;
(() => {
    let isActive = true;
    let isOpen = undefined;
    let isTrue = null;
    console.log(isActive);
    console.log(isOpen);
    console.log(isTrue);
})();
;
(() => {
    let avengers = 4;
    console.log({ avengers });
    if (avengers === 4) {
        console.log('¡Quienes son los héroes?');
    }
})();
;
(() => {
    var _a;
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = `Puede`;
    console.log(batman.toLowerCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'no hay caracter');
})();
;
(() => {
    const hero = ['Dr strange', 2, true];
    hero[0] = 'iroman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
;
(() => {
    function callBatman() { }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
