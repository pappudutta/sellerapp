import React from "react";

import { MdOutlinePeopleAlt } from "react-icons/md";
import { LiaGasPumpSolid } from "react-icons/lia";
import { GiSpeedometer } from "react-icons/gi";
import { RiSteering2Fill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Carousel from "./imgCarousel/Carousel";
import { useSelector } from "react-redux";

const Cards = ({ item }) => {
  const {
    image,
    brand,
    capacity,
    fuelType,
    mileage,
    rentPrice,
    year,
    mode,
    like,
  } = item;

  const { carsData } = useSelector(state => state.home);
  console.log(
    carsData.map(item => {
      item.like;
    })
  );

  const handleLike = () => {
    dispatch(getJsonData());
  };

  return (
    <>
      {item && (
        <div className="w-[310px] md:w-1/3 max-w-[375px] bg-sky-50 drop-shadow-lg border border-white rounded-2xl p-2">
          <div>
            <Carousel images={image} />
          </div>

          <div className=" mt-3 mx-3">
            <div className="flex items-center justify-between">
              <div className="text-2xl">{brand} </div>
              <div className="text-sm border border-dashed border-sky-400 px-2 py-0.5 rounded-xl">
                {year}
              </div>
            </div>
            <div className="flex mt-4 mb-3">
              <div className="flex w-1/2 items-center gap-1">
                <span className="text-blue-400 text-lg">
                  <MdOutlinePeopleAlt />
                </span>
                <span className="text-sm text-gray-600">{capacity} people</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-blue-400 text-lg">
                  <LiaGasPumpSolid />
                </span>
                <span className="text-sm  text-gray-600">{fuelType}</span>
              </div>
            </div>
            <div className="flex mb-3">
              <div className="flex w-1/2 items-center gap-1">
                <span className="text-blue-400 text-lg">
                  <GiSpeedometer />
                </span>
                <span className="text-sm text-gray-600">
                  {mileage} km/ 1-liter
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-blue-400 text-lg">
                  <RiSteering2Fill />
                </span>
                <span className="text-sm text-gray-600">{mode}</span>
              </div>
            </div>
            <hr className="h-px my-5 bg-gray-200 border-0"></hr>
            <div className="flex justify-between items-center mb-3">
              <div className="text-xl">
                ${rentPrice}
                <span className="text-sm text-gray-600">/ month</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  onClick={() => {}}
                  className="text-[21px] text-blue-400 bg-blue-100 rounded-lg p-1 cursor-pointer hover:opacity-80"
                >
                  {like ? <AiFillHeart /> : <AiOutlineHeart />}
                </span>
                <button className="rounded-xl text-sm text-white bg-blue-400 py-[5px] px-3 hover:opacity-80">
                  Rent now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
