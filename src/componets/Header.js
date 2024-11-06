import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
// import Image from 'react-bootstrap/Image';
import logo from '../images/MAIN LOGO LIGHT BROWN@4x.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <header className={`navbar1 ${isOpen ? 'active' : ''}`}>
    <a href="#home" className="logo">
      <img src={logo} alt="logo" style={{ width: 120 }}/>
    </a>
    <nav>
      <ul  className={`nav-item ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" >Home</a></li>
        <li><a href="#services" >Our Services</a></li>
        <li><a href="#book" >Book Appointment</a></li>
        <li><a href="#contacts" >Contact Us</a></li>
      </ul>
      <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
       </button>
    </nav>

</header>

    // <Card className={`navbar1 ${isOpen ? 'active' : ''}`}>
    //   <a href="#home" className="logo">
    //     <Image src={logo} alt="logo" style={{ width: 120 }} />
    //   </a>
    //   <Card.Header>
    //     <Nav variant="tabs" defaultActiveKey="#first" className={`nav-item ${isOpen ? 'active' : ''}`}>
    //       <Nav.Item>
    //         <Nav.Link href="#home">Home</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link href="#services">Our Services</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link href="#book">Book Appointment</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link href="#contacts">Contact Us</Nav.Link>
    //       </Nav.Item>
          
    //     </Nav>
    //     <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
    //       <span className="icon-bar"></span>
    //       <span className="icon-bar"></span>
    //       <span className="icon-bar"></span>
    //     </button>
    //   </Card.Header>
    // </Card>
  );
}

export default Header;
