import React from 'react'

const Pagination = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <span className="text-sm text-gray-700">
        Showing <span className="font-semibold text-gray-900">1</span> to{' '}
        <span className="font-semibold text-gray-900">10</span> of{' '}
        <span className="font-semibold text-gray-900">100</span> Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button className=" relative bg-gradient-to-r from-orange-300 to-amber-400 py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-900 hover:scale-105">
          Prev
        </button>
        <button className=" relative bg-gradient-to-r from-orange-300 to-amber-400 py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded border-gray-700 hover:bg-gray-900 ml-2 hover:scale-105 ">
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
