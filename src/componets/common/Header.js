import React from 'react';
import logo from './logo.png';
import Search from './search/Search'
import {Link} from 'react-router-dom'
import './Header.css'
const Header=()=>{
    return(
     <div className="Header">
        <Link to='/'><img src={logo} alt='Hello' className="Header-logo"/></Link>
        <Search/>
     </div>
    )
}
export default Header