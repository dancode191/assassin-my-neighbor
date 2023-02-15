
import './App.css'; 
import Main from "./components/pageLayout/Main/Main.js";
import Header from "./components/pageLayout/Header/Header.js"
import NavBar from "./components/pageLayout/NavBar/NavBar.js"
import Footer from "./components/pageLayout/Footer/Footer.js"
import Routing from './components/pageLayout/Routing/Routing';

function App() {
  
  return ( 
    <>
    
    {/* <div className="appBody container d-flex flex-column h-100"> */}
    <div className="appBody container-fluid fill">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="navbarContainer">
        <NavBar />
      </div>
      <div className="RoutingContainer">
        <Routing/>
        {/* <Main /> */}
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
        
    </div>
    </>
  );
}

export default App;
