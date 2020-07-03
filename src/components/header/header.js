import React, {Component} from 'react';
import Menu from '../../menuh.png';
import './header.css'
import Config from '../../config.png';


class Header extends Component {
    render() {
        return (
        <div className="header-container"> 
        
            <img src={Menu} alt="Menú" className="header-menu"></img>
            <h1 className="header-title"> Keep Cuentas Monadi </h1>
            <img src={Config} alt="Config" className="header-config"></img>
            
        </div>
        )
    }
}
export default Header;