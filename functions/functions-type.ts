;(() => {
  const addNumber = (a: number, b: number): number => a + b
  const greet = (name: string): string => `Hello ${name}`
  const saveTheWorld = (): string => `The World is saved`

  let myFunction

  myFunction = addNumber

  console.log({ result: addNumber(1, 2) })
  console.log({ result: myFunction(1, 2) })
  console.log({ result: greet('Jhon') })
  console.log({ result: saveTheWorld() })
})()
