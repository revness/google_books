import { createContext, useEffect, useState } from "react";
// import { getBooks } from "../services/books-service";

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  //   const [books, setBooks] = useState(null);

  const [searchTerm, setSearchTerm] = useState(null);

  //   useEffect(() => {
  //     getBooks("harry potter").then((books) => setBooks(books));
  //     console.log("fetched books");
  //   }, []);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
