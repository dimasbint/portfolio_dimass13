import Display from './components/display';
import Navbar from './components/navbar';
import About from './components/about';
import Service from './components/service';
import Projects from './components/projects';
import Contact from './components/contact';
import ReviewSection from './components/review';



import './index.css';


export default function App() {
  return (
    <div>
      <Navbar />
       <div id="display" >
        <Display />
      </div>

       <div id="about" >
        <About />
      </div>

     <div id="service" >
        <Service />
      </div>
      
      <div id="projects" >
        <Projects />
      </div>

      <div id="review" >
        <ReviewSection />
      </div>

      <div id="contact" >
        <Contact />
      </div>
    </div>
  );
}
