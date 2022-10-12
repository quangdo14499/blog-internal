import React, { useContext, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Blogs from '../containers/Blogs'
import CreateForm from '../containers/BlogManager/CreateForm'

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Blogs />
    </div>
  )
}

export default Home
