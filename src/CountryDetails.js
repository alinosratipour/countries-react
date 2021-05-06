import React,{Fragment} from "react";
import CountriesData from "./countriesAll.json";
import { Link,useParams,useHistory  } from "react-router-dom";
const CountryDetails= () => {
    const {name} = useParams();
    let history = useHistory();
const linkedCountry = CountriesData.filter((country) => country.name === name);

return (
<Fragment>
<div>
{linkedCountry.map((country, index) => {
const { name, flag, population, region, capital, languages, subregion, topLevelDomain, currencies, nativeName, borders } = country;
let domain = topLevelDomain[0];
let currency = currencies[0].name.concat(".");
let stringLanguages = languages.map((language) => language.name);

let sortedLanguages = stringLanguages.join(", ");
return (
<div className="mainContainer" key={index}>
       <div className="backButtonHolder">
        {/* <Link to='/' className='bntBack'>&laquo; Back</Link> */}
        <button className='bntBack'  onClick={history.goBack}>&laquo; Back</button>
        </div>
    <div>
        <div className="country" key={index}>
        <div className="countryContainer">
        <img src={flag} alt={name} className="flagImage" />
            
                
                
               
                  <div className="countriesDetails">
                    <h1 className="countryName">{name}</h1>
                   <div className="InfoColumnWrapper">
                    <div className="firstInfoColumn">
                        <p>Native Name: <span>{nativeName}</span></p>
                        <p>population: <span>{population}</span></p>
                        <p>Region: <span>{region}</span></p>
                        <p>Sub Region: <span>{subregion}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                    </div>

                    <div className="soundInfoColumn">
                        <p>Top Level Domain: <span>{domain}</span></p>
                        <p>Currencies: <span>{currency}</span></p>
                        <p>Languages: <span>{sortedLanguages}</span></p>
                    </div>
                </div>
                </div>
                </div>
             

                <div className="borderCountriesContainer">
                    <div className="borderFirstColumn">Border Countries:</div>
                    <div className="border-link-container">
                        { borders.map((border,index) => {
                            return (
                                <Link  key={index} to={`/CountryDetails/${border}`} className="borderLinks">{border}</Link>
                                 
                            );
                        })}
                    </div>
                </div>
           
        </div>
    </div>
</div>
);
})}
</div>
</Fragment>
);
};




export default CountryDetails;