;(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {}
  class Villano extends Mutante {}

  const wolverine = new Xmen('Wolverine', 'Logan')
  const magneto = new Villano('Magneto', 'Magnus')

  // console.log(wolverine)
  // console.log(magneto)

  const printName = (character: Mutante) => {
    console.log(character.realName)
  }

  // printName(wolverine)
})()
