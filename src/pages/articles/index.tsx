import React, { useState } from 'react'
import BlogManager from '../../containers/BlogManager'
import CreateForm from '../../containers/BlogManager/CreateForm'

const Articles = () => {
  const [openCreateForm, setOpenCreateForm] = useState<boolean>(false)
  const [createdBlog, setCreatedBlog] = useState<boolean>(false)

  return (
    <div className="relative">
      <BlogManager
        createdBlog={createdBlog}
        setOpenCreateForm={setOpenCreateForm}
      />
      {openCreateForm && (
        <CreateForm
          createdBlog={createdBlog}
          setOpenCreateForm={setOpenCreateForm}
          setCreatedBlog={setCreatedBlog}
        />
      )}
    </div>
  )
}

export default Articles
