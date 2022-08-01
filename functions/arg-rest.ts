;(() => {
  const fullName = (firstName: string, ...args: string[]): string => {
    return `${firstName} ${args.join(' ')}`
  }

  console.log({ dev: fullName('Jhon', 'Jainer', 'Perez') })
})()
