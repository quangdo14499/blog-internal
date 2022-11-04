import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import blog from '../../api/blog'
import { DeleteRequest } from '../../api/request/BlogRequest'
import { BlogResponse } from '../../api/response/BlogResponse'
import DeleteModule from './DeleteModule'
import EditForm from './EditForm'
import Pagination from './Pagination'

interface Props {
  createdBlog: boolean
  setOpenCreateForm: (value: boolean) => void
}

const BlogManager: React.FC<Props> = ({ createdBlog, setOpenCreateForm }) => {
  const dayjs = require('dayjs')
  const [blogs, setBlogs] = useState<any>()
  const [openDeleteModule, setOpenDeleteModule] = useState(false)
  const [deleteItem, setDeletedItem] = useState<DeleteRequest>()
  const [editItem, setEditItem] = useState<BlogResponse>()
  const [openEditModule, setOpenEditModule] = useState<boolean>(false)
  const [actionDone, setActionDone] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      const response = await blog.getBlog()
      console.log(response)
      setBlogs(response.data.data)
    })()
  }, [createdBlog, actionDone])

  return (
    <div className="relative bg-slate-200 h-screen pt-8 px-5">
      <div className="container max-w-7xl mx-auto ">
        <div className="mb-4">
          <div className="flex justify-end">
            <button
              className="relative px-4 py-2 rounded-md text-sky-100 bg-gradient-to-r
               from-cyan-400 to-blue-400 mr-3 font-medium hover:scale-105"
              onClick={() => setOpenCreateForm(true)}
            >
              Create Blog
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-purple-500">
                      ID
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-purple-500">
                      Title
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-purple-500">
                      Description
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-purple-500">
                      Create_At
                    </th>
                    <th
                      className="px-6 py-3 text-sm text-left text-white border-b border-gray-200 bg-purple-500"
                      colSpan={3}
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {blogs &&
                    blogs.map((item: BlogResponse, index: number) => {
                      return (
                        <tr key={index} className="border-b">
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
                            <div className="flex items-center">{index + 1}</div>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">
                              {item.attributes.title}
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p>{item.attributes.description}</p>
                          </td>

                          <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <span>
                              {dayjs(
                                item.attributes.createdAt.slice(0, 10)
                              ).format('DD/MM/YYYY')}
                            </span>
                          </td>

                          <td className="flex justify-center">
                            <div
                              className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                              onClick={() => {
                                setEditItem(item)
                                setOpenEditModule(true)
                              }}
                            >
                              <Link href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div
                              className="w-6 h-6 text-red-600 hover:text-red-800 cursor-pointer"
                              onClick={() => {
                                setDeletedItem({
                                  id: item.id,
                                  title: item.attributes.title,
                                })
                                setOpenDeleteModule(true)
                              }}
                            >
                              <Link href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openDeleteModule && deleteItem && (
        <DeleteModule
          deleteItem={deleteItem}
          setDeleted={setActionDone}
          deleted={actionDone}
          setOpenDeleteModule={setOpenDeleteModule}
        />
      )}
      {openEditModule && editItem && (
        <EditForm
          editItem={editItem}
          setOpenEditModule={setOpenEditModule}
          actionDone={actionDone}
          setActionDone={setActionDone}
        />
      )}
      <Pagination />
    </div>
  )
}

export default BlogManager
