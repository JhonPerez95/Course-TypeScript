;(() => {
  interface addTwoNumbers {
    (a: number, b: number): number
  }

  let addNumberFunction: addTwoNumbers

  addNumberFunction = (a: number, b: number) => {
    return a + b
  }

  // console.log(addNumberFunction(3, 3))
})()
