import { Routes, Route } from 'react-router-dom'
import NavbarCitas from './components/NavbarCitas'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Carrito from './pages/Carrito'
import Admin from './pages/Admin'

function App() {
  return (
    <>
      <NavbarCitas />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}
export default App