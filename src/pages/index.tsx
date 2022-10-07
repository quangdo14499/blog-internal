import React, { useContext, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { LoginContext } from '../providers/LoginProvider'

const Home: NextPage = () => {
  const { confirmed, user } = useContext(LoginContext)
  if (!confirmed) {
    return <></>
  }
  return <div>Home Page</div>
}

export default Home
