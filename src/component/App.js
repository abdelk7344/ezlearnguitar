import React from 'react'
import Header from './Header'
import Features from './Features'
import Setup from './Setup'
import Demo from './Demo'
import Blog from './Blog'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div class="container">
      <Header/>
      <Setup/>
      <Features/>
      <Demo/>
      <Blog/>
      <About/>
    </div>
  );
}

export default App;
