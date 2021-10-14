import { useContext } from "react";
import About from "../components/about";
import Contact from '../components/contact/Contact';
import { ThemeContext } from "../components/context";
import Intro from '../components/intro/Intro';
import Portfolio from '../components/portfolio/Portfolio';
import Toggle from "../components/Toggle";
import Works from '../components/works/Works';
import './mainapp.scss';

const MainApp = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="mainapp" style={{
              backgroundColor: darkMode ? "#222" : "white",
              color: darkMode && "white"      }}>
        <Toggle/>
      <div className="sections">
        <Intro />
        {/* <About/> */}
        <Portfolio />
        {/* <Works /> */}
        {/* <Testimonials/> */}
        <Contact/>
      </div>
        </div>
    )
}

export default MainApp;
