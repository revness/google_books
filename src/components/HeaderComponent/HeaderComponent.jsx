import styles from "./HeaderComponent.module.scss";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import SearchBar from "../SearchBar/SearchBar";
const HeaderComponent = () => {
  const { setSearchTerm } = useContext(SearchContext);

  const onSearch = (term) => {
    console.log("Searched for term " + term);
    setSearchTerm(term);
  };
  return (
    <div className={styles.HeaderComponent}>
      <div className={styles.HeaderComponent__title}>
        <h1>Discover Books with Google Books API</h1>
        <p>Explore a vast collection of books with our powerful search tool.</p>
        <p>Enter a title, author, or keyword and start your journey!</p>
      </div>
      <div className={styles.HeaderComponent__search}>
        <SearchBar
          placeholder="Search for author or title"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};
export default HeaderComponent;
