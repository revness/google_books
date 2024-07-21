import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import BooksContextProvider from "./context/SearchContextProvider";
import BooksPage from "./pages/BooksPage/BooksPage";

function App() {
  return (
    <>
      <BooksContextProvider>
        <HeaderComponent />
        <BooksPage />
      </BooksContextProvider>
    </>
  );
}

export default App;
