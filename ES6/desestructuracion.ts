;(() => {
  // Obejtos
  interface Avenger {
    iroman: string
    isActive: boolean
    nick: string
    poder: number
    vision: string
  }

  const avenger: Avenger = {
    iroman: 'Robert Downey Jr',
    isActive: true,
    nick: 'Samuel L. Jackson',
    poder: 1500,
    vision: 'Paul Bettany',
  }

  const { iroman, isActive, poder } = avenger
  console.log({
    iroman: iroman.toUpperCase(),
    isActive,
    poder: (poder / 4.5).toFixed(1),
  })

  const prinAvenger = ({ poder, vision }: Avenger): void => {
    console.log(`${poder} ${vision}`)
  }

  prinAvenger(avenger)

  // Arreglos
  1
  const avengerArr: string[] = ['Cap. America', 'Iroman', 'Thor', 'Hulk']
  const Iroman: string = avengerArr[1]

  console.log(Iroman)

  const [, iromanArr] = avengerArr
  console.log(iromanArr)
})()
