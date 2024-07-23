import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import { getBooks } from "../../services/books-service";
import BooksCard from "../../components/BooksCard/BooksCard";
import styles from "./BooksLoader.module.scss";
const BooksLoader = () => {
  const { searchTerm } = useContext(SearchContext);
  const [booksData, setBooksData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("IDLE");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm === null) return;

    setFetchStatus("LOADING");
    getBooks(searchTerm)
      .then((data) => {
        console.log("success ran");

        setFetchStatus("SUCCESS");
        setBooksData(data);
      })
      .catch((error) => {
        console.log(error);
        setFetchStatus("FAILURE");
        setError(error);
      });
  }, [searchTerm]);
  return (
    <div className={styles.BooksLoader}>
      {fetchStatus === "IDLE" && <p>Search for a book</p>}
      {fetchStatus === "LOADING" && <p>Loading...</p>}
      {fetchStatus === "SUCCESS" && (
        <>
          <p>{booksData.items.length} books found</p>
        </>
      )}
      <div className={styles.BooksLoader__content}>
        {fetchStatus === "SUCCESS" &&
          booksData.items.map((book) => (
            <div key={book.id}>
              <BooksCard book={book} />
            </div>
          ))}
      </div>
      {fetchStatus === "FAILURE" && (
        <p style={{ color: "red" }}>{error.message}</p>
      )}
    </div>
  );
};

export default BooksLoader;
