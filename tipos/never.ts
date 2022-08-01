;(() => {
  // never es un tipo que nunca se cumple, por ejemplo: un error que nunca se puede producir.
  const error = (msg: string): never => {
    throw new Error(msg)
  }

  error('Error')
  console.log('Hola mundo!')
})()
