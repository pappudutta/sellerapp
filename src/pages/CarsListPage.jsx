import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Pagination from "../components/paginationBar/Pagination";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CarsListPage = () => {
  const navigate = useNavigate();
  const { carsData } = useSelector(state => state.home);
  const { searchData } = useSelector(state => state.home);

  let data = searchData.length === 0 ? carsData : searchData;

  const [currentPage, setCurrentPage] = useState(1);

  const totalCars = data.length;
  const totalPage = totalCars > 6 ? totalCars / 6 : 1;

  useEffect(() => {
    navigate(`/page/${currentPage}`);
  }, [currentPage]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mx-auto my-8">
        {data.slice(currentPage * 6 - 6, currentPage * 6).map(item => (
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
