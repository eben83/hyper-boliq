import './App.css';
import Header from "./components/header/header";
import MovieView from "./components/movieView/movieView";
import SearchBar from "./components/searchBar/searchBar";

const App = () => {

  return (
    <div className="App">
      <Header />
      <MovieView />
    </div>
  );
}

export default App;
