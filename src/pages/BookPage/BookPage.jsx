import styles from "./BookPage.module.scss";
import { useEffect } from "react";

const BookPage = ({ close, data }) => {
  return (
    <div className={styles.Background}>
      <div className={styles.BookPage}>
        <h1>
          {data?.volumeInfo?.title ? data.volumeInfo.title : "no title  "}
        </h1>
        <p className={styles.BookPage__p}>
          {data?.volumeInfo?.description
            ? data.volumeInfo.description
            : "no description"}
        </p>
        <button className={styles.CloseButton} onClick={close}>
          x
        </button>
      </div>{" "}
    </div>
  );
};

export default BookPage;
