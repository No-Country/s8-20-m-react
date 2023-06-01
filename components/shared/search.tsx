import React, { useState } from "react";
import Image from "next/image";
import { InputHTMLAttributes } from "react";



const Search:React.FC<InputHTMLAttributes<HTMLInputElement>> = () => {
  // state for keeping track of search query
  const [query, setQuery] = useState("");

  // handle input change and update state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // handle form submit and prevent page reload
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // do something with the search query
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center bg-white rounded-full shadow-xl">
        <input
        
          type="text"
          name="search"
          placeholder="Buscar"
          value={query}
          onChange={handleInputChange}
          className="flex-grow px-4 py-2 pr-16 text-xl text-gray-700 placeholder-gray-500 bg-transparent outline-none"
        />
        <button
          type="submit"
          
        >
          <Image
              src="/lupaR.png"
              alt="lupa roja"
              width={45}
              height={45}
              quality={100}
            />
        </button>
      </div>
    </form>
  )
}

export default Search;





