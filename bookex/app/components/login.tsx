import React from 'react'

function login() {
  return (
    <div>
        <form action="http://localhost:5000/temp" method="POST">
          <input
            name="temp_data"
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          />

          
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Sign In
          </button>
        </form>
    </div>
  )
}

export default login