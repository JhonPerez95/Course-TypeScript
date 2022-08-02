;(() => {
  class Apocalipsis {
    static instance: Apocalipsis
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy un apocalipsis')
      }

      return Apocalipsis.instance
    }

    changeName(newName: string) {
      this.name = newName
    }
  }

  // const apocalipsis = new Apocalipsis('Soy Apocalipsis')
  const apocalipsis = Apocalipsis.callApocalipsis()
  const apocalipsis2 = Apocalipsis.callApocalipsis()

  apocalipsis2.changeName('Prueba donde cambiamos el name')
  const apocalipsis3 = Apocalipsis.callApocalipsis()

  console.log(apocalipsis, apocalipsis2, apocalipsis3)
})()
