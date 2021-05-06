import React from "react";

const SearchCountriesInput = ({setSearchCountries}) =>{

   
const SearchCountries = (e) =>{
  setSearchCountries(e.target.value);  
}



    return(
<div className="searchCountries">

<input placeholder="Search for a Country" type="search" onChange={SearchCountries} />
    
</div>

    );


}

export default SearchCountriesInput;