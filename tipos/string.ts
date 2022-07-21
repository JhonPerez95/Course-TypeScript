;(() => {
  const batman: string = 'Bruce'
  const superman: string = 'Clark'
  const existe: string = `Puede`

  console.log(batman.toLowerCase())

  console.log(batman[10]?.toLowerCase() || 'no hay caracter')
})()
