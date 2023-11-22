import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar-hotizontal'
import Footer from './footer'
import React, { useState } from 'react';

const Layout =({children}) => {

  const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};	

  
  return (
   
    <>
     <Navbar></Navbar>
     
      {children}
     <Footer></Footer>
    </>
 
  )
}

export default Layout;