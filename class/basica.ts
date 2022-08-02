;(() => {
  class Avenger {
    static avgAge: number = 35

    constructor(
      private name: string,
      public team: string,
      public realName: string
    ) {}

    public bio(): string {
      return `${this.name} is a ${this.team}`
    }

    static getAvgAge(): number {
      // return this.name // Retorna el nombre de la clase
      return Avenger.avgAge
    }
  }

  // Static, propiedad las cuales solo se tiene acceso haciendo referencia a la clase.
  // console.log(Avenger.avgAge)

  const atman: Avenger = new Avenger('Scott Lang', 'Cap', 'Atman')
  // console.log(atman)
  // console.log(atman.bio())
  // console.log(Avenger.getAvgAge())
})()
