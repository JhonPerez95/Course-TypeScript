;(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log('Constructor Avenger Llamado!')
    }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`
    }
  }

  class XMen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName)
      // console.log('Constructor XMen llamado')
    }

    public getFullNameOfXmen(): string {
      return super.getFullName()
    }

    get fullname() {
      return `${this.name} --  ${this.realName}`
    }

    set fullname(name: string) {
      this.name = name.toUpperCase()
    }
  }

  const wolverine = new XMen('Wolverine', 'Logan', true)

  // console.log(wolverine.getFullNameOfXmen())
  // console.log(wolverine.fullname)
  // wolverine.fullname = 'Wolverine 2 '
  // console.log(wolverine.fullname)
})()
