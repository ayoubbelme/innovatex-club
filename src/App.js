
import './App.css';
import { Navbar,Hero,About,Contact,Team,Events,FAQ,Footer } from './Sections/index';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
 <>
  <BrowserRouter>
    <Navbar />
    <Hero/>
    <About/>
    <Contact/>
    <Team/>
    <Events/>
    <FAQ/>
    <Footer/>
    
    
  </BrowserRouter>
 </>
  );
}

export default App;
