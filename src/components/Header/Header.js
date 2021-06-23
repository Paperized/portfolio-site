import React from 'react';
import { Navbar, Container, NavLink } from 'react-bootstrap';
import './Header.scss';

class Header extends React.Component
{
  componentDidMount()
  {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount()
  {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event)
  {
    let navbar = document.getElementById('main-nav');
    window.scrollY > navbar.clientHeight ? navbar.classList.add('navbar-scrolled') : navbar.classList.remove('navbar-scrolled');
  }

  smoothScrollToAnchor(id)
  {
    const element = document.getElementById(id);
    if(element !== undefined && element !== null)
      element.scrollIntoView({behavior: "smooth"});
  }

  render()
  {
    return (
      <Navbar collapseOnSelect expand="lg" fixed="top" className="py-3" id="main-nav">
        <Container>
          <Navbar.Brand href="/">Ivan Lo Greco</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-end">
                  <NavLink onClick={() => this.smoothScrollToAnchor("about")} className="nav-link">About</NavLink>
                  <NavLink onClick={() => this.smoothScrollToAnchor("curriculum")} className="nav-link">Curriculum</NavLink>
                  <NavLink onClick={() => this.smoothScrollToAnchor("projects")} className="nav-link">Projects</NavLink>
                  <NavLink onClick={() => this.smoothScrollToAnchor("contacts")} className="nav-link">Contact</NavLink>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
