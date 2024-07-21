import styles from "./BooksCard.module.scss";
import { useState, useEffect } from "react";
import BookPage from "../../pages/BookPage/BookPage";
import { createPortal } from "react-dom";

const BooksCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.BookCard} onClick={() => setShowModal(!showModal)}>
        <img
          className={styles.BookCard__img}
          src={
            book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
              ? book.volumeInfo.imageLinks.thumbnail
              : "https://via.placeholder.com/150"
          }
        ></img>
        <h2 className={styles.BookCard__title}>
          {book.volumeInfo.title.length < 50
            ? book.volumeInfo.title
            : book.volumeInfo.title.substring(0, 50) + "..."}
        </h2>
        <div>
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.map((author, index) => (
                <small key={index}>
                  {author}
                  {
                    index !== book.volumeInfo.authors.length - 1 && ", "
                    /** checks if index is the last item in array and if not
                  appends the comma */
                  }
                </small>
              ))
            : "no author"}
        </div>
      </div>
      {showModal &&
        createPortal(
          <BookPage
            close={() => {
              setShowModal(!showModal);
            }}
            data={book}
          />,
          document.body
        )}
    </>
  );
};

export default BooksCard;

//- Each book in the grid should have an image, author, title and description
