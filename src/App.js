import './app.scss';
import ProfilePerusahaan from "./pagePortfolio/Web/ProfilePerusahaan";
import MainApp from './MainApp';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Menu from './menu/Menu';
import { useState } from 'react';
import ECommerce from './pagePortfolio/Web/ECommerce';
import Fikratussalam from './pagePortfolio/Web/Fikratussalam';
import Netflix from './pagePortfolio/Web/Netflix';
import WebShop from './pagePortfolio/Web/WebShop';
import WebSocial from './pagePortfolio/Web/WebSocial';



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Router>
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Switch>
      <Route exact path="/"><MainApp/></Route>
      <Route path="/web/1"><WebSocial/></Route>
      <Route path="/web/3"><Fikratussalam/></Route>
      <Route path="/web/2"><Netflix/></Route>
      <Route path="/web/4"><ECommerce/></Route>
      <Route path="/web/5"><WebShop/></Route>
      <Route path="/web/6"><ProfilePerusahaan/></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
