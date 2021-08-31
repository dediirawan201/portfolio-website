import React from 'react'
import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Dedi Irawan.</a>
                    <div className='itemContainer'>
                        <Person className="icon"/>
                        <span>0896-14232-232</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className="icon"/>
                        <span>dedi@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    hallo
                </div>
            </div>
        </div>
    )
}

export default Topbar
