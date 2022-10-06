import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import auth from '../../api/auth'

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('')
        .min(4, 'Must be 4 characters or more'),
      email: Yup.string()
        .required('')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Please enter a valid email address'
        ),
      password: Yup.string()
        .required('')
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          'Password must be 7-19 characters and contain at least one letter, one number and a special character'
        ),
      confirmedPassword: Yup.string()
        .required('')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
    }),
    onSubmit: (values) => {
      console.log(values)
      auth.register(values)
    },
  })

  return (
    <div>
      <div className=" bg-gray-900 min-h-screen flex flex-col">
        <form
          className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
          onSubmit={formik.handleSubmit}
        >
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-gray-300 w-full p-3 rounded outline-green-400"
              name="username"
              placeholder="Your Name"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <div className="h-8">
              {formik.errors.username && (
                <p className="text-xs text-red-600">{formik.errors.username}</p>
              )}
            </div>

            <input
              type="text"
              className="block border border-gray-300 w-full p-3 rounded outline-green-400"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <div className="h-8">
              {formik.errors.email && (
                <p className="text-xs text-red-600">{formik.errors.email}</p>
              )}
            </div>
            <input
              type="password"
              className="block border border-gray-300 w-full p-3 rounded outline-green-400"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <div className="h-8">
              {formik.errors.password && (
                <p className="text-xs text-red-600">{formik.errors.password}</p>
              )}
            </div>

            <input
              type="password"
              className="block border border-gray-300 w-full p-3 rounded outline-green-400"
              name="confirmedPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmedPassword}
              onChange={formik.handleChange}
            />
            <div className="h-8">
              {formik.errors.confirmedPassword && (
                <p className="text-xs text-red-600">
                  {formik.errors.confirmedPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-600 mt-4">
              By signing up, you agree to the
              <a className="mx-1 underline hover:text-green-500" href="#">
                Terms of Service
              </a>
              and
              <a className="mx-1 underline hover:text-green-500" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className=" text-gray-500 mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue-500 text-blue-500 hover:text-blue-800 hover:border-blue-800"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm