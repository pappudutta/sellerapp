import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarsListPage from "./pages/carsListPage";
import Header from "./components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import fetchJsonData from "./services/data-client";
import { useDispatch, useSelector } from "react-redux";
import { getJsonData } from "./features/cars/carsSlice";
import Pagination from "./components/paginationBar/Pagination";

function App() {
  const [postPerPage, setPostPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();

  const { carsData } = useSelector(state => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchJsonData().then(res => {
      dispatch(getJsonData(res));
    });
  }, []);

  useEffect(() => {
    setNumberOfPages(carsData.length / 6);
  }, []);

  return (
    <div className="w-full bg-blue-50 ">
      <div className="max-w-[1200px] mx-auto p-3">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<CarsListPage />}>
              <Route path="/page/:pageNum" element={<CarsListPage />} />
            </Route>
          </Routes>
          <Pagination />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
