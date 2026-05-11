import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 w-full"
    />
  );
};

export default Search;