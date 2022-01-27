import './App.css';
import Header from "./components/header/header";
import MovieView from "./components/movieView/movieView";
import {StoreProvider, createStore } from "easy-peasy";
import model from "./model";

const store = createStore({model});

function App () {

  return (
    <StoreProvider store={store}>
        <div className="App">
            <Header />
            <MovieView />
        </div>
    </StoreProvider>
  );
}

export default App;
