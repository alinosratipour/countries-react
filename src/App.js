
import './App.css';
import countriesAll from "./countriesAll.json";
import ShowCountries from "./ShowCountries";
import Header from "./Header";
import React,{useState} from "react";
import CountryDetails from "./CountryDetails";
import Neighbour from "./Neighbour";
import { BrowserRouter as Router, Route} from "react-router-dom";


const App = () =>{
  const [clicked, SetClicked] = useState(false);
  return (
    <Router >
    <div className="App"  >
    
    <Header clicked={clicked} SetClicked={SetClicked} />
    
      <Route exact path="/">
      <div className={clicked ? "darkmode" : ""}>
    <ShowCountries  allCountries={countriesAll} clicked={clicked} />
    </div>
   
   </Route>
    </div>
   
    <Route  path="/CountryDetails/:name" component={CountryDetails}  />
        <Route path="/CountryDetails/:border" >
        <Neighbour />
        </Route>
    </Router>
  );
}

export default App;
