;(() => {
  interface Xmen {
    name: string
    realName: string
    mutantPower(id: number): string
  }

  interface Human {
    age: number
  }

  class Xmen implements Xmen, Human {
    constructor(
      public name: string,
      public realName: string,
      public age: number
    ) {}

    mutantPower(id: number): string {
      return `${this.name} ${id}`
    }
  }

  const newMutant = new Xmen('Jhon', 'Flash', 26)

  console.log(newMutant.mutantPower(2))
})()
