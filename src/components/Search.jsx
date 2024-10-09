import React from 'react'

const Search = () => {
  return (
    <div className="w-[98%] mx-auto">
      <input
        className="w-full h-[40px] border border-black/50 mt-5 bg-transparent rounded-[2px] px-2"
        type="text"
        placeholder='search...'
      />
    </div>
  );
}

export default Search