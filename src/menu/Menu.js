import { useContext } from 'react';
import { ThemeContext } from '../components/context';
import './menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={"menu " +  (menuOpen && "active")} style={{
            backgroundColor: darkMode ? "white" : "#222" }}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro" style={{color: darkMode ? "#222" : "white"}}>Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio" style={{color: darkMode ? "#222" : "white"}}>Portfolio</a>
                </li>
                {/* <li onClick={() => setMenuOpen(false)}>
                    <a href="#works" style={{color: darkMode ? "#222" : "white"}}>Works</a>
                </li> */}
                {/* <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials" style={{color: darkMode ? "#222" : "white"}}>Testimonials</a>
                </li> */}
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact" style={{color: darkMode ? "#222" : "white"}}>Contact</a>
                </li> 
            </ul>
        </div>
    )
}

export default Menu;
