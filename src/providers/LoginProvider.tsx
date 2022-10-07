import React, { createContext, useEffect, useState } from 'react'
import { noop } from 'lodash'
import { User } from '../interfaces/user'
import auth from '../api/auth'
import { useRouter } from 'next/router'

interface LoginContextValue {
  confirmed: boolean
  user?: User
  setConfirmed: (value: boolean) => void
}

interface Props {
  children: React.ReactNode
}

export const LoginContext = createContext<LoginContextValue>({
  confirmed: false,
  user: undefined,
  setConfirmed: noop,
})

export const LoginProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const [user, setUser] = useState<User>()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await auth.confirmed()
        console.log(response)
      } catch (err) {
        console.error(err)
        router.push('/login')
      }
    })()
  }, [confirmed])

  return (
    <LoginContext.Provider value={{ confirmed, user, setConfirmed }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
