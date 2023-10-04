import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = ({ src, className }) => {
  return (
    <div>
      <LazyLoadImage className={className || ""} alt={""} src={src} />
    </div>
  );
};

export default Img;
