import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const ViewStarRating = (props) => {
  const rating = props.star;
  return (
    <div className="stars__main">
      {[...Array(5)].map((stars, index) => {
        const ratingValue = index + 1;
        return (
          <div key={index}>
            <FaStar
              className="star"
              size={25}
              color={ratingValue <= rating ? "#FF9529" : "#a9a9a9"}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ViewStarRating;
