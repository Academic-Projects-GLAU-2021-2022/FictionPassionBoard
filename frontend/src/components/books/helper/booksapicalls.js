import { API } from "../../../backend";

//
//to retrive entire books
//
export const getBooks = async () => {
  return await fetch(`${API}/allBooks`, {
    method: "GET",
  })
    .then((res) => {
      //console.log("res", res);
      return res.json();
    })
    .catch((err) => {
      //console.log("err", err);
      return err;
    });
};

//
//to count ratings
//
export const updateRatings = (ratings, id) => {
  console.log("apiwala", ratings);
  console.log("apiwalajson", JSON.stringify(ratings));
  return fetch(`${API}/book/addRating/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stars: ratings }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};
