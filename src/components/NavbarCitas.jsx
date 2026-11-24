
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

function NavbarCitas({ totalItems = 0 }) {
  const { usuario, cerrar } = useAuth()
  const navigate = useNavigate()

  const cerrarSesion = () => {
    cerrar()
    navigate('/')
  }

  return (
    <Navbar className="navbar-citas" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">citas.lol</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/">Descubrir</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Mi carrito ({totalItems})</Nav.Link>
            {usuario ? (
              <>
                {usuario.rol === 'ADMIN' && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
                <Navbar.Text className="px-lg-2">Hola, {usuario.nombre}</Navbar.Text>
                <Nav.Link as="button" type="button" onClick={cerrarSesion}>
                  Cerrar sesión
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarCitas
