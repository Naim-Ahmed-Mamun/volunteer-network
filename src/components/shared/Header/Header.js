import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
   const { user,logout } = useAuth();
   console.log(user);
   return (
      <>
         <div className="navBar_container">
            <Navbar collapseOnSelect expand="lg" variant="dark">
               <Container>
                  <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="ms-auto nav_menu">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/donation">Donation</NavLink>
                        <NavLink to="/events">Events</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        {/* <button className="btn regular_btn">Register</button> */}
                        {/* <Link to="/login"><button className="btn dark_btn">Login</button></Link> */}
                        {
                           user.email ? <span>Hi!{user.displayName}
                              <span onClick={logout}>
                                <button className="btn dark_btn">Logout</button></span>
                           </span>
                              : <span>
                                 <span><button className="btn regular_btn">Register</button></span>
                                 <Link to="/login"><button className="btn dark_btn">Login</button></Link>
                              </span>
                        }
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </>
   );
};

export default Header;