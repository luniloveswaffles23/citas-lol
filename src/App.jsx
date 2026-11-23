import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavbarCitas from './components/NavbarCitas'
import Inicio from './pages/Inicio'
import Main from './pages/Main'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Carrito from './pages/Carrito'
import Admin from './pages/Admin'

function App() {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id)
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <>
      <NavbarCitas totalItems={totalItems} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/main" element={<Main onAgregarCarrito={agregarAlCarrito} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              onEliminar={eliminarDelCarrito}
              onVaciar={vaciarCarrito}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App