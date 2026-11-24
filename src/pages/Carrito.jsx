import { useState } from 'react'
import { Link } from 'react-router-dom'
import { obtenerCampeones } from '../api'
import { useDatos } from '../hooks/useDatos'

function Carrito({ carrito = [], onEliminar, onVaciar }) {
  const { datos: personajes, cargando: cargandoCampeones } = useDatos(obtenerCampeones)
  const [campeonId, setCampeonId] = useState('')
  const [invocador, setInvocador] = useState('')
  const [errorCampeon, setErrorCampeon] = useState('')
  const [error, setError] = useState('')
  const [compraExitosa, setCompraExitosa] = useState(false)

  const totalOro = carrito.reduce((acc, item) => acc + item.precio_oro * item.cantidad, 0)
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0)

  const campeon = personajes.find((p) => String(p.id) === campeonId)
  const fotoCampeon = campeon ? campeon.imagen || campeon.foto : null

  const handleConfirmar = (e) => {
    e.preventDefault()

    let valido = true

    if (!campeon) {
      setErrorCampeon('Elige a qué campeón le vas a regalar.')
      valido = false
    } else {
      setErrorCampeon('')
    }

    if (!invocador.trim() || !invocador.includes('#')) {
      setError('Ingresa tu Riot ID válido con tag (ej: Faker#LAN)')
      valido = false
    } else {
      setError('')
    }

    if (!valido) return

    setCompraExitosa(true)
    if (onVaciar) onVaciar()
  }

  return (
    <div className="container mt-4 pb-5" style={{ maxWidth: 760 }}>
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h1 className="h3 mb-1">Mi carrito</h1>
          {!compraExitosa && carrito.length > 0 && (
            <p className="texto-suave mb-0">
              {totalItems} {totalItems === 1 ? 'regalo' : 'regalos'} para tu cita
            </p>
          )}
        </div>
        {!compraExitosa && carrito.length > 0 && (
          <button className="btn-secundario btn-chico" onClick={() => onVaciar && onVaciar()}>
            Vaciar carrito
          </button>
        )}
      </div>

      {compraExitosa ? (
        <div className="tarjeta text-center p-5">
          <h3 className="mb-2" style={{ color: 'var(--accent)' }}>¡Regalos enviados con éxito!</h3>
          <p className="texto-suave mb-4">
            Tus regalos para <strong>{campeon ? campeon.nombre : 'tu cita'}</strong> fueron enviados
            con la cuenta <strong>{invocador}</strong>. ¡Suerte en tu cita en la Grieta!
          </p>
          <Link to="/" className="btn-accent text-decoration-none d-inline-block">
            Volver a Descubrir
          </Link>
        </div>
      ) : carrito.length === 0 ? (
        <div className="tarjeta text-center p-5">
          <p className="texto-suave mb-3">Aún no has agregado regalos a tu carrito.</p>
          <Link to="/" className="btn-accent text-decoration-none d-inline-block">
            Ir a ver regalos
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column gap-3">
              {carrito.map((item) => (
                <div key={item.id} className="tarjeta carrito-item">
                  <div className="carrito-img">
                    {item.imagen ? (
                      <img src={item.imagen} alt={item.nombre} />
                    ) : (
                      <span className="texto-suave small">Sin imagen</span>
                    )}
                  </div>

                  <div className="flex-grow-1">
                    <h6 className="mb-1 fw-bold">{item.nombre}</h6>
                    <p className="texto-suave small mb-1">
                      {item.precio_oro} c/u · x{item.cantidad}
                    </p>
                    <p className="mb-0 fw-bold" style={{ color: 'var(--second)' }}>
                      {item.precio_oro * item.cantidad} de oro
                    </p>
                  </div>

                  <button
                    className="btn-secundario btn-chico"
                    onClick={() => onEliminar && onEliminar(item.id)}
                    aria-label={`Quitar ${item.nombre} del carrito`}
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="tarjeta carrito-resumen p-4">
              <h6 className="fw-bold mb-3">Resumen</h6>

              <div className="d-flex justify-content-between mb-2">
                <span className="texto-suave">Regalos</span>
                <span>{totalItems}</span>
              </div>
              {campeon && (
                <div className="d-flex justify-content-between mb-2">
                  <span className="texto-suave">Para</span>
                  <span>{campeon.nombre}</span>
                </div>
              )}
              <hr className="carrito-linea" />
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="fw-bold fs-5" style={{ color: 'var(--accent)' }}>Total</span>
                <span className="fs-5 fw-bold" style={{ color: 'var(--accent)' }}>
                  {totalOro} de oro
                </span>
              </div>

              <form onSubmit={handleConfirmar} noValidate>
                <label htmlFor="campeon" className="d-block fw-bold mb-2">
                  ¿A qué campeón le regalas?
                </label>
                <select
                  id="campeon"
                  className="input-citas"
                  value={campeonId}
                  onChange={(e) => setCampeonId(e.target.value)}
                >
                  <option value="">
                    {cargandoCampeones ? 'Cargando campeones…' : 'Elige un campeón'}
                  </option>
                  {personajes.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.nombre} · {p.raza}
                    </option>
                  ))}
                </select>
                {errorCampeon && <p className="text-danger small mt-2 mb-0">{errorCampeon}</p>}

                {campeon && (
                  <div className="carrito-destino">
                    {fotoCampeon && (
                      <img
                        src={fotoCampeon}
                        alt={campeon.nombre}
                        style={{ objectPosition: campeon.posicion_tarjeta || 'center 20%' }}
                      />
                    )}
                    <span className="small texto-suave">{campeon.descripcion}</span>
                  </div>
                )}

                <label htmlFor="riotId" className="d-block fw-bold mt-4 mb-2">
                  Tu Riot ID (Nombre#TAG)
                </label>
                <input
                  id="riotId"
                  type="text"
                  className="input-citas mb-2"
                  placeholder="Ej: Invocador#LAS"
                  value={invocador}
                  onChange={(e) => setInvocador(e.target.value)}
                />
                {error && <p className="text-danger small mb-2">{error}</p>}

                <button type="submit" className="btn-accent w-100 mt-2">
                  Confirmar envío
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Carrito