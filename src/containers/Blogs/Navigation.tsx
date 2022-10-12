import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import { User } from '../../api/response/UserResponse'
import { UserLoginContext } from '../../providers/UserLoginProvider'

interface Props {
  user: User
}

const NavBar: React.FC<Props> = ({ user }) => {
  const { confirmed, setConfirmed, logout, setLogout } =
    useContext(UserLoginContext)
  const [navbar, setNavbar] = useState(false)
  const [drop, setDrop] = useState(false)

  useEffect(() => {
    if (logout || confirmed) {
    } else {
      localStorage.removeItem('jwt')
    }
  }, [logout, confirmed])

  const handleLogout = () => {
    setLogout(false)
    setConfirmed(false)
  }

  return (
    <nav className="w-full bg-purple-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <a href="">Home</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="">Blog</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="">About US</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="">Contact US</a>
              </li>
              <a
                href="#"
                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 md:hidden flex items-center"
              >
                <div className="h-8 w-8 mr-3 rounded-full bg-green-900 flex justify-center items-center">
                  {user.username.slice(0, 1).toLocaleUpperCase()}
                </div>
                <div>{user.username}</div>
              </a>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block relative">
          <button
            className="pr-2 pl-4 py-2 text-white bg-purple-700 rounded-md shadow flex items-center"
            onClick={() => setDrop(!drop)}
          >
            <div>{user.username}</div>
            <div className="h-8 w-8 ml-3 rounded-full bg-green-900 flex justify-center items-center">
              {user.username.slice(0, 1).toLocaleUpperCase()}
            </div>
          </button>
          {drop && (
            <div className="absolute bg-white w-[20vw] h-[25vh] rounded-lg right-0 top-14 z-10 flex flex-col justify-around">
              <div className="px-4 py-2 hover:bg-slate-200 text-gray-500 cursor-pointer">
                <Link href={'/change-password'}>Change Password</Link>
              </div>
              <div className="px-4 py-2 hover:bg-slate-200 text-gray-500 cursor-pointer">
                Settings
              </div>
              <div
                className="px-4 py-2 border-t hover:bg-slate-200 text-gray-500 cursor-pointer"
                onClick={handleLogout}
              >
                Sign out
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
