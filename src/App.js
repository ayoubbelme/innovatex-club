
import './App.css';
import { Navbar,Hero,About,Contact,Team,Events,FAQ } from './Sections/index';
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
    
    
  </BrowserRouter>
 </>
  );
}

export default App;
