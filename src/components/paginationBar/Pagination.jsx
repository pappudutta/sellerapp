import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Pagination = ({ totalCars, currentPage, setCurrentPage, totalPage }) => {
  // Image carousel previous slide function
  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(prevPage => prevPage - 1);
  };

  // Image carousel next slide function
  const handleNext = () => {
    if (currentPage === totalPage) return;
    setCurrentPage(prevPage => prevPage + 1);
  };

  // total page more then 6 pages then add dots in middle
  const renderPageNumber = () => {
    const maxPageToShow = 5;

    // Display all when pages less then 6 pages
    if (totalPage <= maxPageToShow) {
      return [...Array(totalPage)].map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => selectedPageHandler(i + 1)}
            className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer rounded-xl text-black bg-white  drop-shadow-md hover:bg-blue-300 h ${
              currentPage === i + 1 ? "bg-[#70b1ff] text-white" : ""
            }`}
          >
            {i + 1}
          </li>
        );
      });
    } else {
      const pageNumbers = [];

      // display first two pages
      for (let i = 0; i < 2; i++) {
        pageNumbers.push(
          <li
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer rounded-xl text-black bg-white  drop-shadow-md hover:bg-blue-300 ${
              currentPage === i + 1 ? "bg-[#70b1ff] text-white" : ""
            }`}
          >
            {i + 1}
          </li>
        );
      }

      // Display dots
      pageNumbers.push(
        <li
          key="dots"
          className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer rounded-xl text-black bg-white  drop-shadow-md hover:bg-blue-300 ${
            currentPage > 2 && currentPage < totalPage - 1
              ? "bg-[#70b1ff] text-white"
              : ""
          }`}
        >
          ...
        </li>
      );

      // Display last pages
      for (let i = totalPage - 2; i < totalPage; i++) {
        pageNumbers.push(
          <li
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer rounded-xl text-black bg-white  drop-shadow-md hover:bg-blue-300 ${
              currentPage === i + 1 ? "bg-[#70b1ff] text-white" : ""
            }`}
          >
            {i + 1}
          </li>
        );
      }

      return pageNumbers;
    }
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center bg-sky-50 rounded-xl drop-shadow-xl px-4 py-3">
        <div className="text-gray-600">
          {Math.min(totalCars, 6)} from {totalCars}
        </div>
        <div>
          <ul className="inline-flex space-x-2 text-sm">
            <li
              onClick={handlePrev}
              className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight cursor-pointer rounded-xl text-white bg-[#70b1ff]   drop-shadow-md  hover:bg-[#70b1ff] ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <BsArrowLeft />
            </li>

            {renderPageNumber()}

            <li
              onClick={handleNext}
              className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer rounded-xl text-white bg-[#70b1ff]   drop-shadow-md  hover:bg-[#70b1ff] ${
                currentPage === totalPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
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
