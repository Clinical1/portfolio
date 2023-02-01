import './navbar.scss'
import { useState } from 'react';

function Navbar() {
  const [showmenu,setshowmenu]=useState(false)
  const closemenu=()=>{
    setshowmenu(false)
  }
  return (
    <nav className='nav' >
      <div className='navwrapper'>
        <div className='h1div'>
          <h1>Portfolio</h1>
        </div>
        <div className='btnsdiv' id={showmenu ? "hidden": ""}>
          <a href='#home'><button className='btn' onClick={closemenu}>Home</button></a>
          <a href='#about'><button className='btn' onClick={closemenu}>About me</button></a>
          <a href='#projects'><button className='btn' onClick={closemenu}>Projects</button></a>
          <a href='#contact'><button className='btn' onClick={closemenu}>Contact me</button></a>         
        </div>
        <button className='burg' onClick={()=>setshowmenu(!showmenu)}><ion-icon name="reorder-three"></ion-icon></button>
      </div>    
    </nav>
  );
}

export default Navbar;