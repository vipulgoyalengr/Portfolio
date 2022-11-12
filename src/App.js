import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
	BrowserRouter as Router,
	Routes,
	Route,HashRouter ,
} from 'react-router-dom';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <HashRouter >
      <Navbar/>
      
      <Routes>
                 <Route exact path="/" element={<Home/>}></Route>
                 <Route exact path="/about" element={<About/>}></Route>
                 <Route exact path="/contact" element={<Contact/>}></Route>
                 <Route exact path="/projects" element={<Projects/>}></Route>
      </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
