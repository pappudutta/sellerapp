import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedData } from "../features/cars/carsSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { carsData } = useSelector(state => state.home);

  const [searchedCars, setSearchedCars] = useState("");

  const handleChange = event => {
    event.preventDefault();
    const value = event.target.value;

    if (value === "") {
      dispatch(getSearchedData(carsData));
    }
    setSearchedCars(value);
  };

  const onSearch = searchTerm => {
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

  return (
    <div className="navbar mt-2 mx-auto sticky top-1 mb-10 z-50">
      <div className="w-full flex gap-10 px-5 py-4 drop-shadow-md shadow-gray-50 bg-blue-50 border border-white rounded-2xl">
        <div className="w-96 relative bg-white px-1 drop-shadow-md shadow-gray-50 rounded-2xl">
          <div className="flex">
            <input
              type="search"
              name="search"
              id="search"
              value={searchedCars}
              onChange={e => handleChange(e)}
              placeholder="Search..."
              className="w-full border-none bg-transparent pl-4 text-gray-950 outline-none focus:outline-0"
            />
            <button
              onClick={() => onSearch(searchedCars)}
              className="m-2 text-xl rounded p-1 pr-3"
            >
              <FiSearch />
            </button>
          </div>
          {searchedCars && (
            <div className="w-full absolute top-9 left-0 bg-white pt-3 rounded-b-xl   ">
              {carsData
                .filter(item => {
                  const searchTerm = searchedCars.toLowerCase();
                  const brandName = item.brand.toLowerCase();

                  return (
                    searchTerm &&
                    brandName.startsWith(searchTerm) &&
                    brandName !== searchTerm
                  );
                })
                .map(item => (
                  <div key={item.id} className=" w-full px-4 pb-1">
                    <div
                      onClick={() => onSearch(item.brand)}
                      key={item.id}
                      className="cursor-pointer pb-1"
                    >
                      {item.brand}
                    </div>
                  </div>
                ))}
            </div>
          )}
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
