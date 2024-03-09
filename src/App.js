import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home.module';
import Nav from './components/Nav.module';
import Gallery from './screens/Gallery.module';
import Footer from './components/Footer.module';
import About from './screens/About.module';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
