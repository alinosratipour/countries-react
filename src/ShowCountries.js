import React from "react";


const ShowCountries = (props) =>{
    function numberWithCommas(num) {
    //return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return num.toLocaleString('en-UK');
   }
    return(
    <div className="wrapper">
{props.results.map((item,index) =>{
    const {name,population,capital,flag}=item;
    return(

     <div className="card-container">
     <img alt="flag" className="flag" src={flag}/>
     <p key={index}>{name}</p> 
     <p>{numberWithCommas(population)}</p> 
     <p>{capital}</p>  
     </div>   
 
    );
})}
    </div>
    );
}


export default ShowCountries;