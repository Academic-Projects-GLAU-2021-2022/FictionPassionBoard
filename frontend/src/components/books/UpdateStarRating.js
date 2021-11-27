import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { updateRatings } from "./helper/booksapicalls";
import "./StarRating.css";

const UpdateStarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState("");
  //const ratingValue;

  const [values, setValues] = useState({
    rrating: "",
  });

  //const { rrating } = values;

  const rateBook = (ratings) => {
    //var avgStars = totalStars / totalReviews;
    //return avgStars;
    console.log("rating received", ratings);

    updateRatings(ratings, props.id)
      .then((data) => {
        if (data.error) {
          //setValues({ ...values });
          console.log("error occurred.");
        } else {
          props.modalCloser();
        }
      })
      .catch(() => {
        return console.log("Cannot update ratings");
      });
    //props.modalCloser();
  };

  return (
    <div className="stars__main">
      {[...Array(5)].map((stars, index) => {
        const ratingValue = index + 1;
        return (
          <div key={index}>
            <FaStar
              className="star"
              size={25}
              color={ratingValue <= (hover || rating) ? "#FF9529" : "#a9a9a9"}
              onMouseEnter={() => setHover(ratingValue)}
              value={ratingValue}
              onMouseLeave={() => setHover(null)}
              onClick={() => {
                //setRating(ratingValue);
                rateBook(ratingValue);
                //console.log("rating1", ratingValue);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UpdateStarRating;
