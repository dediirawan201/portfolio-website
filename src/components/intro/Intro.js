import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed: 60,
            strings: ["Developer", "Designer"],
        });
    },[])
    return (
        <div className="intro" id="intro">
            
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Dedi Irawan</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
