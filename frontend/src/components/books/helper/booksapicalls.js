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
export const updateRatings = async (id, book) => {
  return await fetch(`${API}/book/addRating/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    body: book,
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};
