import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home.module';
import Nav from './components/Nav.module';
import Gallery from './screens/Gallery.module';
import Footer from './components/Footer.module';
import About from './screens/About.module';
import * as React from 'react';
import { theme } from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Contact from './screens/Contact.module';
import Service from './screens/Service.module';



function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <div className="App">
      <Nav />
      <Routes>
      <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/service' element={<Service />} />
        <Route path='/' element={<Home />} />

        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </div>
    </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
