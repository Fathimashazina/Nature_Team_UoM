// import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import News from './components/News';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Link } from 'react-scroll'
import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div id='home'>
      <NavBar />
        {/* <ScrollToTop/> */}
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contactus' element={<ContactUs/>} />
      </Routes> */}

      <Home />
<AboutUs/>
<Blog/>
<News/>
<Projects/>
      <ContactUs />
      <Footer/>
      {/* <Link 
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={8}
          duration={500}>
      
      </Link>
      <Link 
          activeClass='active'
          to='aboutus'
          spy={true}
          smooth={true}
          offset={23}
          duration={500}>
      
      </Link>
      <Link 
          activeClass='active'
          to='blog'
          spy={true}
          smooth={true}
          offset={136}
          duration={500}>
      
      </Link>
      <Link 
          activeClass='active'
          to='news'
          spy={true}
          smooth={true}
          offset={8}
          duration={500}>
      
      </Link>
      <Link 
          activeClass='active'
          to='project'
          spy={true}
          smooth={true}
          offset={8}
          duration={500}>
      
      </Link>
      <Link 
          activeClass='active'
          to='contactus'
          spy={true}
          smooth={true}
          offset={8}
          duration={500}>
      
      </Link>
       */}

    </div>
  );
}

export default App;
