import React, { useState, useContext } from "react";
import ImageHelper from "./helper/ImageHelper";
import "./BookCard.css";
import Modal from "./UIElements/Modal";
import ViewStarRating from "./ViewStarRating";
import UpdateStarRating from "./UpdateStarRating";

const BookCard = (props) => {
  //const cardTitle = book.title;
  //const cardDescription = book.description;
  //const countBookRating = book.
  //const id = book._id;
  //console.log(cardTitle);

  const countRating = () => {
    var avgStars = props.totalStars / props.totalReviews;
    return avgStars;
  };

  const [showBook, setShowBook] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openBookHandler = () => setShowBook(true);

  const closeBookHandler = () => setShowBook(false);

  const showAddRatingWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelAddRatingHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmAddRatingHandler = () => {
    setShowConfirmModal(false);
    console.log("Updated");
  };

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <ImageHelper book={props.book} />
          <br />
          <h2>{props.title}</h2>
          <h3>~By {props.author}</h3>
          <div className="bookCard__main-button-div">
            <button className="bookCard__main-button" onClick={openBookHandler}>
              View More
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={showBook}
        onCancel={closeBookHandler}
        header={props.title}
        contentClass="book-item__model-content"
        footerClass="book-item__modal-actions"
        footer={
          <React.Fragment>
            <div className="bookCard__close-button">
              <button onClick={closeBookHandler}>CLOSE</button>
              <button onClick={showAddRatingWarningHandler}>RATE</button>
            </div>
          </React.Fragment>
        }
      >
        <div>
          <div className="card-body">
            <br />
            <h2>{props.title}</h2>
            <h3>~By {props.author}</h3>
            <div className="imageHelper">
              <ImageHelper book={props.book} />
            </div>
            <h3>Published by :- {props.publication}</h3>
            <div className="cardBody-description">
              <h3>{props.description}</h3>
            </div>

            <div className="book-card__stars">
              <ViewStarRating star={countRating()} />
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onClick={cancelAddRatingHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <div className="bookCard__close-button">
              <button onClick={cancelAddRatingHandler}>CANCEL</button>
              <button onClick={confirmAddRatingHandler}>ADD</button>
            </div>
          </React.Fragment>
        }
      >
        <div className="ratingtext">
          <div className="book-card__stars">
            <UpdateStarRating />
          </div>
          <p>
            Do you want to proceed and add rating to this book? Please note that
            it can't be undone thereafter.
          </p>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default BookCard;
