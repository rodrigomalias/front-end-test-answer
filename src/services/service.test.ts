import axios from 'axios'
import { fetchUsers } from '.'

export const usersMock = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
]

describe('fetchUsers function', () => {
  jest.mock('axios')
  test('fetches data from fetchUsers', async () => {
    axios.get = jest.fn().mockImplementation(async () => await Promise.resolve({data: usersMock}))
    const { data } = await fetchUsers()
    expect(data).toEqual(usersMock)
  })
})
