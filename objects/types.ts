;(() => {
  type Hero = {
    name: string
    age?: number
    powers: string[]
    getName?: () => string
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['speed', 'super strength', 'flight'],
  }

  let superman: Hero = {
    name: 'Clark Kent',
    age: 40,
    powers: ['super strength', 'flight', 'x-ray vision'],
    getName() {
      return this.name
    },
  }
  console.log({ flash, superman })

  // superman.getName()
})()
