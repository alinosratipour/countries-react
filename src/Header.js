import React from "react";
import { ImBrightnessContrast } from "react-icons/im";
const Header = ({ clicked, SetClicked }) => {
    const darkMode = () => {
        SetClicked(!clicked);
    };
return(

<header className={clicked ? "header-dark" : "header"} >

<div className={clicked ? "logo-dark" : "logo"}><h1>Where in the world</h1></div>
<div className="toggle" >
 <ImBrightnessContrast className={clicked ? "light-dark" : "light"}  />
 <button onClick={darkMode} >Change Themes</button>
</div>


</header>





);

}


export default Header;