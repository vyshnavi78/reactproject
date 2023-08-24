
import './App.css';
import Home from './component/Home';
import Testimonial from './component/Testimonial';
import About from './component/About';
import Work from './component/work';
import Contact from './component/contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className='App'>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
