import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarsListPage from "./pages/carsListPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className=" w-full bg-blue-50">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CarsListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
