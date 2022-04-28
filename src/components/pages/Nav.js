import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import useThemeSwitcher from '../useThemeSwitcher'
import az from "../../assets/img/bayraq.jpg"
import en from "../../assets/img/english.jpg"
const languages = [
    {
        code: 'az',
        name: <p className='flagtext'><img className='flag' src={az}  alt="" />  Azerbaijan</p>,
        country_code: 'az'
    },
    {
        code: 'en',
        name: <p className='flagtext'><img className='flag' src={en}  alt="" />  English</p>,
        country_code: 'gb'
    },

]
const Nav = () => {
    const ThemeSwitcher = useThemeSwitcher();
    const [isMobile, setIsMobile] = useState(false);
 const { t } = useTranslation();
    const{totalItems,addItem}=useCart();
    return(
        <nav className='navbar'>
            
            <ul className={isMobile? "nav-links-mobile" : "nav-links"}
            onClick={()=>setIsMobile(false)}
            >

                <NavLink to='/' className="link"  activeClassName="active" exact ><li>{t('text1')}</li><hr /></NavLink>
                <NavLink to='/about' className="link"  activeClassName="active" ><li>{t('text2')}</li><hr /></NavLink>
                <NavLink to='/contact' className="link"  activeClassName="active" ><li>{t('text3')}</li><hr /></NavLink>
                <NavLink to='/blog' className="link"  activeClassName="active" ><li>{t('text4')}</li><hr /></NavLink>
                <NavLink to="/card"  className="nav-link link1 d-flex mt-2" aria-current="page" activeClassName="active" aria-current="page" href="#">
                    <AiOutlineShoppingCart className='icon'/>
                    <div className="number d-flex align-items-center justify-content-center">
                        {totalItems}
                    </div>

                </NavLink>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    🌐
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {languages.map(({code, name, country_code}) => (
                        <li key={country_code} >
                            <button className="dropdown-item" 
                            onClick={()=> {i18next.changeLanguage(code)}}>
                                {name}
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>

            </ul>
           {ThemeSwitcher}
            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <AiOutlineClose/> : <AiOutlineMenu/> }
            </button>

        </nav>
    )
}
export default Nav;