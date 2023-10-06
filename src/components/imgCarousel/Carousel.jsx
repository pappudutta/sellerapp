import React, { useState } from "react";
import Img from "../lazyloadImag/Img";
import FallBackImg from "../../assets/car.jpg";
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCarousel = index => {
    setCurrentIndex(index);
  };
  return (
    <div className="flex justify-center w-full items-center">
      <div className="relative w-full">
        <div className="carousel">
          <div className="flex ml-10 text-white">
            <div
              onClick={handlePrev}
              className="absolute text-xl left-2 top-[46%] cursor-pointer z-10"
            >
              <BiSolidChevronLeft />
            </div>
            <div
              onClick={handleNext}
              className="absolute text-xl right-2 top-[46%] cursor-pointer z-10"
            >
              <BiSolidChevronRight />
            </div>
          </div>

          <Img
            src={images[currentIndex] || FallBackImg}
            className="rounded-2xl w-full"
          />

          <div className="absolute bottom-4 left-[50%] translate-x-[-50%] flex gap-2 items-center z-10">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => handleCarousel(index)}
                className={`${
                  currentIndex === index
                    ? " bg-white h-1 w-5"
                    : "bg-gray-300 h-1 w-3"
                } cursor-pointer rounded`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
