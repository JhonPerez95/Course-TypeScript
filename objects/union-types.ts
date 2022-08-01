;(() => {
  type Hero = {
    name: string
    age?: number
    powers: string[]
    getName?: () => string
  }

  let myCustomVariable: string | number | Hero = 'Jhon'

  console.log({ myCustomVariable })
})()
