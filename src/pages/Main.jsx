import { useState } from 'react'
import { personajes } from '../data/personajes'
import { productos } from '../data/productos'
import PanelFiltros from '../components/PanelFiltros'
import TarjetaPersonaje from '../components/TarjetaPersonaje'
import TarjetaRegalo from '../components/TarjetaRegalo'
import MatchDelDia from '../components/MatchDelDia'
import FichaCampeon from '../components/FichaCampeon'
import FichaRegalo from '../components/FichaRegalo'

function Main({ onAgregarCarrito}) {
  const [mostrarFiltros, setMostrarFiltros] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [distancia, setDistancia] = useState(25)
  const [raza, setRaza] = useState('Todas')
  const [seleccionado, setSeleccionado] = useState(null)
  const [regaloSeleccionado, setRegaloSeleccionado] = useState(null)

  const handleAgregarRegalo = (producto) => {
    if (onAgregarCarrito) onAgregarCarrito(producto)
  }

  // Cambia cada día según la fecha
  const matchDelDia = personajes[new Date().getDate() % personajes.length]

  const filtrados = personajes.filter(
    (p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      p.distancia_km <= distancia &&
      (raza === 'Todas' || p.raza === raza)
  )

  return (
    <div className="container mt-4 pb-5">
      <button
        className="chip mb-3"
        onClick={() => setMostrarFiltros(!mostrarFiltros)}
        aria-expanded={mostrarFiltros}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
        Filtros
      </button>

      <div className="row g-4">
        {mostrarFiltros && (
          <div className="col-12 col-lg-3">
            <PanelFiltros
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              distancia={distancia}
              setDistancia={setDistancia}
              raza={raza}
              setRaza={setRaza}
            />
          </div>
        )}

        <div className={mostrarFiltros ? 'col-12 col-lg-9' : 'col-12'}>
          <h1 className="mb-4">Encuentra a tu dúo en la Grieta</h1>

          <MatchDelDia personaje={matchDelDia} />

          <h2 className="h4 mb-3">Campeones disponibles</h2>

          <div className="row g-3">
            {filtrados.map((p) => (
              <div className="col-12 col-sm-6 col-xl-4" key={p.id}>
                <TarjetaPersonaje
                  personaje={p}
                  onVer={setSeleccionado}
                />
              </div>
            ))}
          </div>

          {filtrados.length === 0 && (
            <p className="texto-suave">
              No hay campeones con esos filtros.
            </p>
          )}

          <h2 className="h4 mt-5 mb-2">Regalos para la cita</h2>

          <p className="texto-suave">
            ¡Demuestra tu interés con uno de nuestros regalos exclusivos de la Grieta del Invocador y causa la mejor primera impresión!
          </p>

          <div className="row g-3">
            {productos.map((prod) => (
              <div className="col-12 col-sm-6 col-lg-4" key={prod.id}>
                <TarjetaRegalo
                  producto={prod}
                  onAgregar={handleAgregarRegalo}
                  onVer={setRegaloSeleccionado}
                />
              </div>
            ))}
          </div>

          <p className="texto-suave mt-3 small">
            Estos objetos son sacados del videojuego League of Legends.
          </p>
        </div>
      </div>

      {/* Ficha del campeón seleccionado */}
      <FichaCampeon
        personaje={seleccionado}
        onCerrar={() => setSeleccionado(null)}
      />

      {/* Ficha del regalo seleccionado */}
      <FichaRegalo
        producto={regaloSeleccionado}
        onCerrar={() => setRegaloSeleccionado(null)}
        onAgregar={handleAgregarRegalo}
      />
    </div>
  )
}

export default Main