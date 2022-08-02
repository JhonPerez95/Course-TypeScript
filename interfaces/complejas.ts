;(() => {
  interface Client {
    name: string
    email: string
    age?: number
    address: Adrress
    getFullAddress(): void
  }

  interface Adrress {
    id: number
    zip: string
    city: string
  }

  const client: Client = {
    name: 'Jhon',
    email: 'jhon@example.com',
    address: {
      id: 123,
      zip: 'KSDF 3 SED',
      city: 'Berlin',
    },
    getFullAddress() {
      return this.address.city
    },
  }

  const client2: Client = {
    name: 'Angie',
    email: 'Angie@example.com',
    address: {
      id: 123,
      zip: 'KSDF 3 SED',
      city: 'Berlin',
    },
    getFullAddress() {
      return this.address.city
    },
  }

  console.log({ client, client2 })
  console.log(client.getFullAddress())
})()
