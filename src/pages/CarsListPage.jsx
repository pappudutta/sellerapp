import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Pagination from "../components/paginationBar/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJsonData, getSearchedData } from "../features/cars/carsSlice";

const CarsListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carsData, searchData } = useSelector(state => state.home);

  let data = searchData.length === 0 ? carsData : searchData;

  const [currentPage, setCurrentPage] = useState(1);

  const totalCars = data.length;
  const totalPage = totalCars > 6 ? totalCars / 6 : 1;

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

  const handleLike = likeId => {
    const carIndexInCarsData = carsData.findIndex(car => car.id === likeId);

    if (carIndexInCarsData !== -1) {
      // Toggle the like status in carsData
      const updatedCar = {
        ...carsData[carIndexInCarsData],
        like: !carsData[carIndexInCarsData].like,
      };

      const updatedCarsData = [...carsData];
      updatedCarsData[carIndexInCarsData] = updatedCar;

      // Update the carsData in the store
      dispatch(getJsonData(updatedCarsData));
    }
    // Check if the car is also in the searchData
    const carIndexInSearchData = searchData.findIndex(car => car.id === likeId);

    if (carIndexInSearchData !== -1) {
      // Toggle the like status in searchData
      const updatedCarInSearch = {
        ...searchData[carIndexInSearchData],
        like: !searchData[carIndexInSearchData].like,
      };

      const updatedSearchData = [...searchData];
      updatedSearchData[carIndexInSearchData] = updatedCarInSearch;

      // Update the searchData in the store
      dispatch(getSearchedData(updatedSearchData));
    }
  };

  useEffect(() => {
    navigate(`/page/${currentPage}`);
  }, [currentPage]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mx-auto my-8">
        {data.slice(currentPage * 6 - 6, currentPage * 6).map(item => (
          <Cards key={item.id} item={item} onLike={handleLike} />
        ))}
      </div>
      <Pagination
        totalCars={totalCars}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        onPrev={handlePrev}
        onNext={handleNext}
        onPageChange={selectedPageHandler}
      />
    </>
  );
};

export default CarsListPage;
