// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Batimovil {
  encender: boolean
  velocidadMaxima: number
  acelear(): void
}
const conducirBatimovil = (auto: Batimovil): void => {
  auto.encender = true
  auto.velocidadMaxima = 100
  auto.acelear()
}

const batimovil: Batimovil = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log('...... gogogo!!!')
  },
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean
  comer?: boolean
  llorar?: boolean
}
const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
}

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log('JAJAJAJA')
  }
}

// Cree una interfaz para la siguiente funcion
interface ParamsCiudadGotica {
  (ciudadano: string[]): number
}

const ciudadGotica: ParamsCiudadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface PersonaArg {
  nombre: string
  edad: number
  sexo: string
  estadoCivil: boolean
  imprimirBio(): void
}
class Persona implements PersonaArg {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: boolean
  ) {}

  imprimirBio(): void {
    console.log(` ${this.nombre} tiene ${this.edad} años, es ${this.sexo}`)
  }
}

const newPersona = new Persona('Jhon', 26, 'M', true)

console.log(newPersona)

newPersona.imprimirBio()
