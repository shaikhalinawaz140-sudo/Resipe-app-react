import React from 'react'

const Search = ({ search, setSearch }) => {

  return (
   <div className="container mx-auto mt-6 px-6 text-black  border-gray-300 py-4 rounded-md">
    <input
    type="text"
    placeholder="Search Recipes..."
    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
    </div>
  )
}

export default Search;
