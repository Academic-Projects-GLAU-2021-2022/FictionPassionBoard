import React from "react";
import { API } from "../../../backend";

const ImageHelper = ({ book }) => {
  const imageurl = book
    ? `${API}/book/photo/${book._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="imageHelper-main">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "20vw", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
