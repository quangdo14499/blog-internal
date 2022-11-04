import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UserLoginContext } from '../../providers/UserLoginProvider'
import auth from '../../api/auth'
import blog from '../../api/blog'

interface Props {
  createdBlog: boolean
  setCreatedBlog: (value: boolean) => void
  setOpenCreateForm: (value: boolean) => void
}

const CreateForm: React.FC<Props> = ({
  createdBlog,
  setCreatedBlog,
  setOpenCreateForm,
}) => {
  const { user } = useContext(UserLoginContext)
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      content: '',
      author: 'admin',
    },
    onSubmit: async (values) => {
      try {
        const response = await blog.createBlog({ data: values })
        setCreatedBlog(!createdBlog)
        setOpenCreateForm(false)
        console.log(response)
      } catch (error) {
        const { response }: any = error
        const { request, ...errorObject } = response
      }
    },
  })
  return (
    <div className="bg-black/40 flex flex-col items-center justify-center fixed z-100 top-0 w-full h-full">
      <div
        className="flex justify-end w-full pr-5 cursor-pointer"
        onClick={() => setOpenCreateForm(false)}
      >
        <div className="text-white">X</div>
      </div>
      <div className="w-2/3">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <form
                method="POST"
                action="action.php"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-4">
                  <label className="text-xl text-gray-600">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="title"
                    id="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="text-xl text-gray-600">Description</label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="description"
                    id="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    placeholder="(Optional)"
                  />
                </div>

                <div className="mb-8 flex flex-col">
                  <label className="text-xl text-gray-600">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="content"
                    className="border-2 border-gray-500"
                    rows={10}
                    value={formik.values.content}
                    onChange={formik.handleChange}
                  ></textarea>
                </div>

                <div className="flex p-1 justify-end">
                  <button
                    role="submit"
                    className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateForm
