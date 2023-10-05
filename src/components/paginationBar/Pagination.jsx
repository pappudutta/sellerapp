import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Pagination = ({ totalCars, currentPage, setCurrentPage, totalPage }) => {
  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage === totalPage) return;
    setCurrentPage(currentPage + 1);
  };

  const selectedPageHandler = selectedPage => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center bg-sky-50 border border-white rounded-xl drop-shadow-xl px-4 py-3">
        <div className="text-gray-600">
          {totalCars > 6 ? 6 : totalCars} from {totalCars}
        </div>
        <div>
          <ul className="inline-flex space-x-2 text-sm">
            <li
              onClick={handlePrev}
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight cursor-pointer rounded-xl text-black bg-white border border-white drop-shadow-md  hover:bg-gray-300 hover:border-gray-300 "
            >
              <BsArrowLeft />
            </li>
            {[...Array(totalPage)].map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => selectedPageHandler(i + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer rounded-xl text-black bg-white border border-white drop-shadow-md hover:bg-gray-300 hover:border-gray-300 ${
                    currentPage === i + 1 ? "bg-blue-300 border-blue-300" : ""
                  }`}
                >
                  {i + 1}
                </li>
              );
            })}

            <li
              onClick={handleNext}
              className="flex items-center justify-center px-3 h-8 leading-tight cursor-pointer rounded-xl text-black bg-white border border-white drop-shadow-md  hover:bg-gray-300 hover:border-gray-300"
            >
              <BsArrowRight />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
