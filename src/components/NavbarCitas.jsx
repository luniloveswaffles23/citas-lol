import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavbarCitas() {
  return (
    <Navbar className="navbar-citas" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">citas.lol</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Descubrir</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Mi carrito (0)</Nav.Link>
            <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
            <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarCitas