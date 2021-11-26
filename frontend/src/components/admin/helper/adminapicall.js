import { API } from "../../../backend";

//adding a book
export const addBook = (book) => {
  return fetch(`${API}/addBook`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: book,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};
