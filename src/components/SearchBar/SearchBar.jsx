import styles from "./SearchBar.module.scss";

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = new FormData(form).get("search");
    onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.form__input}
        type="text"
        placeholder={placeholder}
        name="search"
      />
      <button className={styles.form__button}>Search</button>
    </form>
  );
};
export default SearchBar;
