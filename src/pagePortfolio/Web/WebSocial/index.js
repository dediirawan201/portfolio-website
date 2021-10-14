import React from 'react'
import { useHistory } from 'react-router'
import '../../../pagePortfolio/general.scss'
const WebSocial = () => {
    const history = useHistory();
    return (
        <div className="container-web">
            <div className="wrapper">
            <h1 className="title">Web Social</h1>
            <hr className="lineHr"/>
            <p className="desc">Mencari teman baru dan komunitas dengan mudah</p>
            <img className="fotoUtama" src="/assets/desain.png"/>
            <hr className="lineHr-2"/>
            <p className="desc">Membuat tampilan website social media untuk digunakan semua kalangan untuk
            bisa berinteraksi dan menulis sesuatu.
            </p>
            <h3 className="role">ROLE</h3>
            <hr className="lineHr-3"/>
            <h4 className="frontend">Front-End</h4>
            <h3 className="tech">TECHNOLOGY</h3>
            <hr className="lineHr-4"/>
            <div className="wrapper-tecno">
                <img className="imgIcon" src="/assets/javascript.png" alt="" />
                <img className="imgIcon" src="/assets/css.png" alt="" />
                <img className="imgIcon" src="/assets/html.png" alt="" />
                <img className="imgIcon" src="/assets/react.png" alt="" />
                <img className="imgIcon" src="/assets/css.png" alt="" />
            </div>
            <h3>TOOLS</h3>
            <hr className="lineHr-5"/>
            <div className="wrapper-tools">
                <img className="imgIcon" src="/assets/github.png" alt="" />
                <img className="imgIcon" src="/assets/code.png" alt="" />
                <img className="imgIcon" src="/assets/chrome.png" alt="" />
            </div>
            <button className="button" onClick={() => history.push('/')}>Kembali</button>
            <p className="desc">I'm Familiar with:</p>
            <div className="wrapper-smallIcon">
            <img className="imgIcon" src="/assets/vue.png" alt="" />
            <img className="imgIcon" src="/assets/code.png" alt="" />
            <img className="imgIcon" src="/assets/javascript.png" alt="" />
            <img className="imgIcon" src="/assets/css.png" alt="" />
            <img className="imgIcon" src="/assets/html.png" alt="" />
            <img className="imgIcon" src="/assets/figma.png" alt="" />
            <img className="imgIcon" src="/assets/git.png" alt="" />
            <img className="imgIcon" src="/assets/nodejs.png" alt="" />
            <img className="imgIcon" src="/assets/react.png" alt="" />
            <img className="imgIcon" src="/assets/github.png" alt="" />
            <img className="imgIcon" src="/assets/chrome.png" alt="" />
            <img className="imgIcon" src="/assets/sass.png" alt="" />
            </div>
        </div>

        </div>
    ) 
}

export default WebSocial;
