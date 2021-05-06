import React  from "react";

const SearchRegionInput = ({setSearchRegion}) =>{
    
    const searchRegion = (e) =>{
  setSearchRegion(e.target.value);  
}
return(
    <div className="searchRegion">
        <select onChange={searchRegion}>
            <option >SelectAll</option>
            <option>Asia</option>
            <option>Africa</option>
            <option>Europe</option>
            <option>America</option>
        </select>
    
    </div>

  );
}

export default SearchRegionInput;