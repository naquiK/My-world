import { NavLink } from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react"

const Header = () => {
    const [show,setShow] = useState(false)

    const handerButtonToggler =() => {
        return setShow(!show)

    }
  return (
    <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="Logo">
                    <NavLink to ={'/'} style={{textDecoration:'none'}}>
                    <h1>WorldAtlas</h1>
                    </NavLink>
                </div>
                <nav className={show ? 'menu-mobile' : 'menu-web'}>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/country'}>Country</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>Contact Us</NavLink>
                        </li>
                    </ul>
                </nav><div className="ham-menu">
                    <button onClick={handerButtonToggler}>
                        <GiHamburgerMenu/>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
