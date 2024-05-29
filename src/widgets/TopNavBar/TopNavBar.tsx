import { FC } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const TopNavBar: FC = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://cdn3.iconfinder.com/data/icons/movie-video/512/Icon_39-1024.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        SuperApp
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto w-100">
          <Nav.Link href="/catalog">Catalog</Nav.Link>
          <Nav.Link href="/favorites">Favorites</Nav.Link>
          <NavDropdown title="Yaroslav Sulaev" id="basic-nav-dropdown" className='ms-auto'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
