;(() => {
  // Void es un tipo que no tiene tipo de dato.

  function callBatman(): void {}

  const callSuperman = (): void => {
    return
  }

  const a = callBatman()
  console.log(a)
})()
