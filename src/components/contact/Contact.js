import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import Pdf from '../img/pdf.png';
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";
import { Archive } from "@material-ui/icons";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [getInputName, setInputName] = useState('')
  const [getInputUser, setInputUser] = useState('')
  const [getInputEmail, setInputEmail] = useState('')
  const [getInputMessage, setInputMessage] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();
    emailjs
      .sendForm(
        "service_ma84co5",
        "template_3084mro",
        formRef.current,
        "user_3fDQMvD9cX7z00wZD313V"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );

      setInputName('')
      setInputUser('')
      setInputEmail('')
      setInputMessage('')
  };

  const handleInputName = (e) => {
    setInputName(e.target.value)
    console.log(getInputName)
  }
  const handleInputUser = (e) => {
    setInputUser(e.target.value)
    console.log(getInputUser)
  }
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
    console.log(getInputUser)
  }
  const handleInputMessage = (e) => {
    setInputMessage(e.target.value)
    console.log(getInputUser)
  }

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Kontak yang bisa dihubungi</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              0896 1683 6431
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              dediirwansyah1925@gmail.com
            </div>
            <div className="c-info-item">
              <Archive className="c-icon"/>
              <span><a style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white"      }} target="_blank" href="https://drive.google.com/file/d/1Ptg3kcuHKJzmUvdwoT4ya3Ukov5BNG19/view?usp=sharing">Download CV</a></span>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Jl. Bacang Raya Rt03/04 no.50 Kel. Pekayon Jaya Kec. Bekasi Selatan
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" value={getInputName} onChange={handleInputName} placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" value={getInputUser} onChange={handleInputUser} placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" value={getInputEmail} onChange={handleInputEmail}  placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" value={getInputMessage} onChange={handleInputMessage} placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
