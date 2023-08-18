import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Properties from './routes/Properties';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Agents from './routes/Agents';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/properties' element={<Properties />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/agents' element={<Agents />}/>
      </Routes>
    </div>
  );
}

export default App;
