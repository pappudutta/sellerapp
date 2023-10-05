import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Pagination from "../components/paginationBar/Pagination";
import { useSelector } from "react-redux";

const CarsListPage = () => {
  const { carsData } = useSelector(state => state.home);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const totalCars = carsData.length;

  useEffect(() => {
    setTotalPage(totalCars / 6);
  });

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mx-auto my-8 ">
        {carsData.slice(currentPage * 6 - 6, currentPage * 6).map(item => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        totalCars={totalCars}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default CarsListPage;
