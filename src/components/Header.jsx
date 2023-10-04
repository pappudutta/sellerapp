import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <main className=" mx-auto navbar py-2 min-w-fit">
        <nav className="w-full flex gap-10 px-5 py-4 drop-shadow-md shadow-gray-50 bg-blue-50 border border-white rounded-2xl mx-4">
          <div className="flex w-96 bg-white rounded-2xl px-1">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              className="w-full border-none bg-transparent px-4 text-gray-950 outline-none focus:outline-0"
            />
            <button className="m-2 text-xl rounded p-1">
              <FiSearch />
            </button>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Relevance
            <span>
              <BiChevronDown />
            </span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            All brands
            <span>
              <BiChevronDown />
            </span>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Header;
