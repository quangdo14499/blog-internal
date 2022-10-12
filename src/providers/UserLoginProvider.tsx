import React, { createContext, useEffect, useState } from 'react'
import { noop } from 'lodash'
import auth from '../api/auth'
import { useRouter } from 'next/router'
import { User } from '../api/response/UserResponse'

interface UserLoginContextValue {
  confirmed: boolean
  logout: boolean
  user?: User
  setConfirmed: (value: boolean) => void
  setUser: (value: User) => void
  setLogout: (value: boolean) => void
}

interface Props {
  children: React.ReactNode
}

export const UserLoginContext = createContext<UserLoginContextValue>({
  confirmed: false,
  logout: true,
  user: undefined,
  setConfirmed: noop,
  setUser: noop,
  setLogout: noop,
})

export const UserLoginProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const [user, setUser] = useState<User>()
  const [logout, setLogout] = useState(true)

  useEffect(() => {
    const autoConfirmed = localStorage.getItem('jwt')?.length
    ;(async () => {
      if (autoConfirmed) {
        try {
          const response = await auth.confirmed()
          const responseUser = response.data
          console.log(responseUser)
          setUser(responseUser)
        } catch (err) {
          console.error(err)
          router.push('/login')
        }
      } else {
        router.push('/login')
      }
    })()
  }, [confirmed, logout])

  return (
    <UserLoginContext.Provider
      value={{ logout, setLogout, confirmed, user, setConfirmed, setUser }}
    >
      {children}
    </UserLoginContext.Provider>
  )
}

export default UserLoginProvider
