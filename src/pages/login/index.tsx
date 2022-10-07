import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import auth from '../../api/auth'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { LoginContext } from '../../providers/LoginProvider'

const Login = () => {
  const [error, setEror] = useState('')
  const { confirmed, user, setConfirmed } = useContext(LoginContext)
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: '',
    },
    validationSchema: Yup.object({
      identifier: Yup.string()
        .required('')
        .min(4, 'Must be 4 characters or more'),
      password: Yup.string()
        .required('')
        .min(4, 'Must be 4 characters or more'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await auth.login(values)
        localStorage.setItem('jwt', response.data.jwt)
        setConfirmed(response.data.jwt.length > 0)
        router.push('/')
      } catch (error) {
        const { response }: any = error
        const { request, ...errorObject } = response
        console.log(errorObject.data.error.message)
        setEror(errorObject.data.error.message)
      }
    },
  })
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-900">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Sign in to your account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email or username
              </label>
              <input
                type="email"
                name="identifier"
                id="email"
                className="block border border-gray-300 w-full p-3 rounded outline-green-400"
                placeholder="Your email or username"
                value={formik.values.identifier}
                onChange={formik.handleChange}
              />
              <div className="">
                {formik.errors.identifier && (
                  <p className="text-xs text-red-600">
                    {formik.errors.identifier}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="block border border-gray-300 w-full p-3 rounded outline-green-400"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <div className="">
                {formik.errors.password && (
                  <p className="text-xs text-red-600">
                    {formik.errors.password}
                  </p>
                )}
                {error && <p className="text-xs text-red-600">{error}</p>}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 ">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline "
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
            <div className="text-sm font-light text-gray-500 flex">
              Don’t have an account yet?{' '}
              <Link href="/register">
                <p className="border-b border-blue-500 text-blue-500 hover:text-blue-800 hover:border-blue-800 cursor-pointer">
                  Sign Up
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
