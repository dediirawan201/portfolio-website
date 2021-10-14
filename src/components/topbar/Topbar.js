import React, { useContext } from 'react'
import './topbar.scss'
import {Person, Mail, Archive, ArchiveOutlined} from '@material-ui/icons'
import { ThemeContext } from '../context';
const Topbar = ({menuOpen,setMenuOpen}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper" style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white"      }}>
                <div className="left">
                    <a href="#intro" className="logo">Dedi Irawan.</a>
                    <div className='itemContainerr'>
                        <Person className="icon"/>
                        <span className="hide">0896-1683-6431</span>
                    </div>
                    <div className='itemContainerr'>
                        <Mail className="icon"/>
                        <span className="hide">dediirwansyah1925@gmail.com</span>
                    </div>
                    <div className='itemContainer'>
                        <Archive className="icon"/>
                        <span><a style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white"      }} target="_blank" href="https://drive.google.com/file/d/1Ptg3kcuHKJzmUvdwoT4ya3Ukov5BNG19/view?usp=sharing">Download CV</a></span>
                    </div>
                </div>
                <div className="right" >
                    <div className="hamburger"  onClick={() => setMenuOpen(!menuOpen)}>
                        <span style={{backgroundColor: darkMode ? "white" : "#222"}} className="line1"></span>
                        <span style={{backgroundColor: darkMode ? "white" : "#222"}} className="line2"></span>
                        <span style={{backgroundColor: darkMode ? "white" : "#222"}} className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
