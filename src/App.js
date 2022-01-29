import './App.css';
import Header from "./components/header/header";
import MovieView from "./components/movieView/movieView";
import {StoreProvider, createStore } from "easy-peasy";
import model from "./store/model";
import {useEffect, useState} from "react";
import LoadingScreen from "./components/loadingScreen/loadingScreen";

const store = createStore({model});

function App () {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        window.setTimeout(() => {setIsLoading(false); }, 2500)
    })

  return (
    <StoreProvider store={store} >
        {isLoading &&
            <LoadingScreen />
        }
        {!isLoading &&
            <div className="App">
                <Header />
                <MovieView />
            </div>
        }
    </StoreProvider>
  );
}

export default App;
