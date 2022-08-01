;(() => {
  class Avenger {
    name
    power

    constructor(name = 'no name', power = 10) {
      this.name = name
      this.power = power
    }
  }

  class FlyingAvenger extends Avenger {
    canFly

    constructor(name, power) {
      super(name, power)
      this.canFly = true
    }
  }

  const hulk = new Avenger('Banner', 100)
  const iroman = new Avenger('Tony Stark')
  const falcon = new FlyingAvenger('Sam')

  console.log(hulk)
  console.log(iroman)
  console.log(falcon)
})()
