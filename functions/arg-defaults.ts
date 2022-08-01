;(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = true
  ): string => {
    if (upper) {
      return `${firstName.toUpperCase()} ${lastName?.toUpperCase()}`
    } else {
      return `${firstName} ${lastName || 'no last name'}`
    }
  }

  console.log(fullName('Flash', 'Gordon', false))
})()
