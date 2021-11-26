import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { updateRatings } from "./helper/booksapicalls";
import "./StarRating.css";

const UpdateStarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState("");
  //let rating = 0;

  const [values, setValues] = useState({
    title: "",
    description: "",
    author: "",
    publication: "",
    totalStars: "",
    totalReviews: "",
  });

  const { title, description, author, publication, totalReviews, totalStars } =
    values;

  const rateBook = (ratings) => {
    var avgStars = totalStars / totalReviews;
    //return avgStars;
    console.log("rating", setRating(ratings));
    setValues({ ...values, totalStars: avgStars });
    console.log(values);
    updateRatings()
      .then((data) => {
        if (data.error) {
          setValues({ ...values });
        } else {
          setValues({
            title: "",
            description: "",
            author: "",
            publication: "",
            totalStars: "",
            totalReviews: "",
          });
        }
      })
      .catch(() => {
        return console.log("Cannot update ratings");
      });
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
                console.log("rating1", ratingValue);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UpdateStarRating;
