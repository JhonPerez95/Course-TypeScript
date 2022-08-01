;(() => {
  const heroe: string = 'Flash'

  function returnHeroe(): string {
    return heroe
  }

  const activeBatiSingal = (): string => {
    return 'Batiseñal activada'
  }
  console.log(returnHeroe())
  console.log(typeof activeBatiSingal())
})()
