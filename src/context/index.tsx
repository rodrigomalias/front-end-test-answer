import React, { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useState } from 'react'
import { IUser } from '../interfaces'
import { fetchUsers } from '../services'

export interface GlobalContextProps {
  users: IUser[]
  setUsers: Dispatch<SetStateAction<IUser[]>> 
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  handleGetUsers: () => void
}

interface GlobalProviderProps {
  children: ReactNode
}

const defaultValue = {
  users: [] as IUser[],
  isLoading: false
}

const GlobalContext = createContext<GlobalContextProps>({ ...defaultValue } as GlobalContextProps)

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }: GlobalProviderProps) => {
  const [users, setUsers] = useState(defaultValue.users)
  const [isLoading, setIsLoading] = useState(defaultValue.isLoading)

  const handleGetUsers = useCallback(async () => {
    try {
      setIsLoading(true)

      const { data } = await fetchUsers()

      setUsers(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        users,
        setUsers,
        handleGetUsers,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = (): GlobalContextProps => {
  return React.useContext(GlobalContext)
}

export { GlobalContext, GlobalProvider, useGlobalContext }
