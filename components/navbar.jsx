import './navbar.scss'
import { useState } from 'react';

function Navbar() {

  return (
    <nav className='nav' >
      <div className='navwrapper'>
        <div className='h1div'>
          <h1>Portfolio</h1>
        </div>
        <div className='btnsdiv'>
          <a href='#home'><button className='btn'>Home</button></a>
          <a href='#about'><button className='btn'>About me</button></a>
          <a href='#projects'><button className='btn'>Projects</button></a>
          <a href='#contact'><button className='btn'>Contact me</button></a>
        </div>
      </div>    
    </nav>
  );
}

export default Navbar;