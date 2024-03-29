;(() => {
  let flash: {
    name: string
    age: number
    powers: string[]
    getName?: () => string
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['speed', 'super strength', 'flight'],
  }

  flash = {
    name: 'Clark Kent',
    age: 40,
    powers: ['super strength', 'flight', 'x-ray vision'],
    getName() {
      return this.name
    },
  }

  // console.log(flash.getName())
})()
