import React, { useState } from "react";
import Img from "./lazyloadImag/Img";
import CarImg from "../assets/car1.jpg";

import { MdOutlinePeopleAlt } from "react-icons/md";
import { LiaGasPumpSolid } from "react-icons/lia";
import { GiSpeedometer } from "react-icons/gi";
import { RiSteering2Fill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Cards = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full md:w-1/3 flex justify-center items-center">
      <div className="w-[330px] p-2 bg-sky-50 drop-shadow-lg border border-white rounded-2xl">
        <div>
          <Img src={CarImg} className="rounded-2xl" />
        </div>

        <div className=" mt-3 mx-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl">Toyota Rav </div>
            <div className="text-sm border border-dashed border-sky-400 px-2 py-0.5 rounded-xl">
              2020
            </div>
          </div>
          <div className="flex mt-4 mb-3">
            <div className="flex w-1/2 items-center gap-1">
              <span className="text-blue-400 text-lg">
                <MdOutlinePeopleAlt />
              </span>
              <span className="text-sm text-gray-600">4 people</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-400 text-lg">
                <LiaGasPumpSolid />
              </span>
              <span className="text-sm  text-gray-600">Hybrid</span>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex w-1/2 items-center gap-1">
              <span className="text-blue-400 text-lg">
                <GiSpeedometer />
              </span>
              <span className="text-sm text-gray-600">6.1 km/ 1-liter</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-400 text-lg">
                <RiSteering2Fill />
              </span>
              <span className="text-sm text-gray-600">Automatic</span>
            </div>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0"></hr>
          <div className="flex justify-between items-center mb-3">
            <div className="text-xl">
              $440 <span className="text-sm text-gray-600">/ month</span>
            </div>
            <div className="flex items-center gap-3">
              <span
                onClick={toggleLike}
                className="text-[21px] text-blue-400 bg-blue-100 rounded-lg p-1 cursor-pointer hover:opacity-80"
              >
                {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
              </span>
              <button className="rounded-xl text-sm text-white bg-blue-400 py-[5px] px-3 hover:opacity-80">
                Rent now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
