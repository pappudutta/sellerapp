import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarsListPage from "./pages/carsListPage";
import Header from "./components/Header";
import "./App.css";
import { useEffect } from "react";
import fetchJsonData from "./services/data-client";
import { useDispatch } from "react-redux";
import { getJsonData } from "./features/cars/carsSlice";

import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchJsonData().then(res => {
      dispatch(getJsonData(res));
    });
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto p-3">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/page/:currentPage" element={<CarsListPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
