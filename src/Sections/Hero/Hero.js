import './Hero.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const Hero = () => {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center text-white" id='Home'>
      <div className="container-sm">
        <h1 className="display-4 animate-title">Welcome to Innova<span className='prim'>tex</span> Club</h1>
        <p className="lead">Where creativity meets innovation. Join us to bring ideas into action!</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScxK1sPJ8JBNCNlQ2NFCyVCtp5iA6MFeCEJXMTQ_pZ7y61V6w/viewform?usp=dialog" target='_blank' className="btn btn-primary btn-lg">Join Us</a>
      </div>
    </section>
  );
};

export default Hero;