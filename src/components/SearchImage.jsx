import React from "react";

const SearchImage = ({setTerm, term}) => {
  return (
    <div className="flex justify-center m-10 py-3 w-full bg-gradient-to-tr from-slate-400 to-green-200 ">

      <div className="flex  bg-gray-700 rounded-full w-80">
        <input
          className="bg-transparent w-full h-10 p-5 text-white border-spacing-x-16 outline-none"
          type="text"
          placeholder="Search Images"
          value={term}
          onChange={(e)=>setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchImage;
