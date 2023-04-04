import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <NavLink className='nav-link text-light ms-5 fs-3' to="/">Imágenes</NavLink>
          <NavLink className='nav-link text-light me-5 fs-3' to="favorites">Favoritos</NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;