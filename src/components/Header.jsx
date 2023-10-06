import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedData } from "../features/cars/carsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { carsData } = useSelector(state => state.home);

  const [searchedCars, setSearchedCars] = useState("");

  const inputRef = useRef(null);

  // on input value change data store to redux store
  const handleSearchInputChange = event => {
    const value = event.target.value;
    setSearchedCars(value);

    if (value === "") {
      dispatch(getSearchedData(carsData));
    }
  };

  // handle enter key press
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      return handleSearch();
    }
  };

  // handle searches and save search data to redux store new reducer
  const handleSearch = searchTerm => {
    setSearchedCars(searchTerm);
    let searchCarsData = [];

    if (searchTerm !== "") {
      carsData.filter(item => {
        const searchTerm = searchedCars.toLocaleLowerCase();
        const brandName = item.brand.toLocaleLowerCase();

        if (brandName.startsWith(searchTerm)) {
          searchCarsData.push(item);
        }
      });
    }
    dispatch(getSearchedData(searchCarsData));
  };

  // data render on inputs data in search box
  const renderSearchResults = () => {
    if (!searchedCars) {
      return null;
    }

    // filter data based on input
    const filteredCars = carsData.filter(item => {
      const searchTerm = searchedCars.toLowerCase();
      const brandName = item.brand.toLowerCase();

      return (
        searchTerm &&
        brandName.startsWith(searchTerm) &&
        brandName !== searchTerm
      );
    });
    return (
      <div className="w-full absolute top-9 left-0 bg-white rounded-b-xl">
        {filteredCars.map(item => (
          <div
            onClick={() => handleSearch(item.brand)}
            key={item.id}
            className="cursor-pointer w-full px-4 py-1"
          >
            {item.brand}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [handleSearch]);

  return (
    <div className="navbar mt-2 mx-auto sticky top-1 mb-10 z-50">
      <div className="w-full flex gap-10 px-5 py-4 drop-shadow-md shadow-gray-50 bg-blue-50 border border-white rounded-2xl">
        <div className="w-96 relative bg-white px-1 drop-shadow-md shadow-gray-50 rounded-2xl">
          <div className="flex">
            <input
              value={searchedCars}
              onChange={e => handleSearchInputChange(e)}
              onKeyUp={e => handleKeyPress(e)}
              ref={inputRef}
              placeholder="Search..."
              className="w-full border-none bg-transparent pl-4 text-gray-950 outline-none focus:outline-0"
            />
            <button
              onClick={() => handleSearch(searchedCars)}
              className="m-2 text-xl rounded p-1 pr-3"
            >
              <FiSearch />
            </button>
          </div>
          {renderSearchResults()}
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
      </div>
    </div>
  );
};

export default Header;
