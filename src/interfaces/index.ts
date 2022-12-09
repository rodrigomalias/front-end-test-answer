import { AxiosResponse } from 'axios'

interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: IAddress
  phone: string
  website: string
  company: ICompany
}

interface IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

interface ICompany {
  name: string
  catchPhrase: string
  bs: string
}

type TFetchUsers = () => Promise<AxiosResponse<IUser[]>>

export type {
  IUser,
  IAddress,
  ICompany,
  TFetchUsers

}