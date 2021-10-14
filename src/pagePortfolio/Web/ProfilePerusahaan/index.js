import React from 'react'
import { useHistory } from 'react-router'
import '../../../pagePortfolio/general.scss'
const ProfilePerusahaan = () => {
    const history = useHistory();
    return (
        <div className="container-web">
            <div className="wrapper">
            <h1 className="title">Profile Perusahaan</h1>
            <hr className="lineHr"/>
            <p className="desc">Menampilkan segala informasi yang berkaitan dengan Perusahaan tersebut</p>
            <img className="fotoUtama" src="/assets/6.png"/>
            <hr className="lineHr-2"/>
            <p className="desc">Profile Perusahaan akan membuat semua orang dengan mudah mengetahui segala informasi umum 
                seperti visi dan misi, media social sampai struktur organisasi.
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
                <img className="imgIcon" src="/assets/sass.png" alt="" />
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

export default ProfilePerusahaan
