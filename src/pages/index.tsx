import React, { useContext, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { LoginContext } from '../providers/LoginProvider'

const Home: NextPage = () => {
  const { confirmed, user, setConfirmed } = useContext(LoginContext)
  console.log(user, confirmed)

  return (
    <>
      {confirmed && user && (
        <div className="w-[100vw] h-[10vh] bg-green-600">
          <div>
            <button className="h-1/2 w-[8vw] bg-red-500 text-white">
              {user.username}
            </button>
            <button className="h-1/2 w-[8vw] bg-red-500 text-white ml-4">
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
