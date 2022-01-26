import './App.css';
import Header from "./components/header/header";
import Tiles from './components/tiles/tiles';


function App() {
  return (
    <div className="App">
      <Header />
      <Tiles title='Test' text='Test'/>
    </div>
  );
}

export default App;
