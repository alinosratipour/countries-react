import React, {Fragment, useState} from "react";
import SearchCountriesInput from "./SearchCountriesInput";
import SearchRegionInput from "./SearchRegionInput";
import { Link } from "react-router-dom";

const ShowCountries = ({allCountries,clicked}) =>{
 const [searchCountries , setSearchCountries] = useState("");
 const [searchRegion , setSearchRegion] = useState("");
 


 function numberWithCommas(num) {
    return num.toLocaleString('en-UK');
   }



const filterCountries = allCountries.filter(item =>{
  return    searchCountries !== "" || searchRegion === "SelectAll" ? item.name.toLowerCase().includes(searchCountries.toLowerCase())
  ||  item.capital.toLowerCase().includes(searchCountries.toLowerCase())

   :  item.region.toLowerCase().includes(searchRegion.toLowerCase());
});






    return(
        <Fragment >
        
<div className="searchWrapper">
  <SearchCountriesInput   setSearchCountries={setSearchCountries} />
  <SearchRegionInput setSearchRegion={setSearchRegion}  />
  </div>

    <div className={clicked ? "wrapper-dark" : "wrapper"}>

     {filterCountries.map((item,index) =>{
    const {name,population,capital,flag}=item;
    return(
        
<Link className="card-container" to={`/CountryDetails/${name}`} key={index} >
     <div >
     <img alt="flag" className="flag" src={flag}/>
     <p key={index}>{name}</p> 
     <p>{numberWithCommas(population)}</p> 
     <p>{capital}</p>  
     </div>   
 </Link>
    );
})}
    </div>
    
    </Fragment>
    );
}


export default ShowCountries;