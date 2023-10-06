import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = ({ src, className }) => {
  return (
    <div>
      <LazyLoadImage
        style={{ width: "100%", height: "230px" }}
        className={className || ""}
        alt="Car images"
        effect="blur"
        src={src}
      />
    </div>
  );
};

export default Img;
