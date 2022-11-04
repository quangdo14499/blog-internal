import React, { useState, useContext } from 'react'
import { UserLoginContext } from '../../providers/UserLoginProvider'
import BlogList from './BlogList'
import NavBar from './Navigation'
import PaginationBlog from './PaginationBlog'

const Blogs = () => {
  const { user } = useContext(UserLoginContext)

  return (
    <>
      {user && (
        <div className="bg-slate-200 pb-8">
          <NavBar user={user} />
          <BlogList />
          <PaginationBlog />
        </div>
      )}
    </>
  )
}

export default Blogs
