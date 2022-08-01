;(() => {
  type Avenger = {
    name: string
    weapon: string
  }

  const iroman: Avenger = { name: 'iroman', weapon: 'ArmorSuit' }
  const capAmerica: Avenger = { name: 'Cap America', weapon: 'Shield' }
  const thor: Avenger = { name: 'Thor ', weapon: 'Mjolnir' }

  const avengers: Avenger[] = [iroman, capAmerica, thor]

  for (const item of avengers) {
    console.log(item.name)
  }

  for (const key in iroman) {
    console.log(key)
  }
})()
