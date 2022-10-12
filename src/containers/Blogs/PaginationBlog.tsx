import React from 'react'

const PaginationBlog = () => {
  return (
    <nav aria-label="Page navigation example" className="flex justify-center">
      <ul className="flex items-center">
        <a href="#" className="next-btn">
          <svg
            aria-hidden="true"
            className="mr-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Previous
        </a>
        {Array(5)
          .fill(1)
          .map((_, i) => (
            <li key={i}>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-2"
              >
                {i + 1}
              </a>
            </li>
          ))}
        <a href="#" className="next-btn">
          Next
          <svg
            aria-hidden="true"
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </ul>
    </nav>
  )
}

export default PaginationBlog
