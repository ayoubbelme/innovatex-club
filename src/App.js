
import './App.css';
import { Popup,Navbar,Hero,About,Contact,Magazine,Team,Events,FAQ,Footer } from './Sections/index';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
 <>
  <BrowserRouter>
    <Popup/>
    <Navbar />
    <Hero/>
    <About/>
    <Contact/>
    <Magazine/>
    <Team/>
    <Events/>
    <FAQ/>
    <Footer/>
    
    
  </BrowserRouter>
 </>
  );
}

export default App;
