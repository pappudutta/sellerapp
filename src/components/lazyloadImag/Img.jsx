import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fallbackImg from "../../../public/car.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
  return (
    <div>
      <LazyLoadImage
        // style={{ width: "100%", height: "auto" }}
        className={className || ""}
        alt="Car images"
        placeholderSrc={fallbackImg}
        src={src}
        effect="blur"
      />
    </div>
  );
};

export default Img;
