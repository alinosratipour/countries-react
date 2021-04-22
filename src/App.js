
import './App.css';
import countriesAll from "./countriesAll.json";
import ShowCountries from "./ShowCountries";

const App = () =>{

  return (
    <div className="App">
  <ShowCountries  results={countriesAll}/>
    </div>
  );
}

export default App;
