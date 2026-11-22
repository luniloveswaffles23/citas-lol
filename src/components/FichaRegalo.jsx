import { useState } from 'react'
import { Modal } from 'react-bootstrap'

const COLOR_ORO = '#F6C177'
const MAX_IMPRESION = 5

function FichaRegalo({ producto, onCerrar, onAgregar }) {
  const [agregado, setAgregado] = useState(false)

  if (!producto) return null

  const impresion = producto.impresion || 0

  const handleAgregar = () => {
    if (onAgregar) onAgregar(producto)
    setAgregado(true)
    setTimeout(() => setAgregado(false), 2000)
  }

  return (
    <Modal
      show
      onHide={onCerrar}
      centered
      size="lg"
      contentClassName="modal-citas"
      aria-labelledby="regalo-titulo"
    >
      <Modal.Body className="p-0">
        <div className="ficha" style={{ '--ficha-color': COLOR_ORO }}>
          <button className="ficha-cerrar" onClick={onCerrar} aria-label="Cerrar ficha">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="ficha-foto regalo">
            {producto.imagen ? (
              <img src={producto.imagen} alt={producto.nombre} />
            ) : (
              <span className="texto-suave">[IMAGEN]</span>
            )}
          </div>

          <div className="ficha-info">
            <h2 id="regalo-titulo" className="ficha-nombre">{producto.nombre}</h2>

            <div className="ficha-datos">
              <span className="ficha-dato raza">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4" strokeLinecap="round" />
                </svg>
                {producto.precio_oro} de oro
              </span>
              {producto.ideal_para && (
                <span className="ficha-dato">{producto.ideal_para}</span>
              )}
            </div>

            {producto.descripcion && (
              <p className="mb-0">{producto.descripcion}</p>
            )}

            {producto.mensaje && (
              <div>
                <small className="texto-suave d-block mb-1">Lo que dice de ti</small>
                <blockquote className="ficha-bio">“{producto.mensaje}”</blockquote>
              </div>
            )}

            {impresion > 0 && (
              <div className="regalo-impresion">
                <span className="texto-suave">Impresión en la cita</span>
                <div
                  className="regalo-corazones"
                  role="img"
                  aria-label={`${impresion} de ${MAX_IMPRESION} corazones`}
                >
                  {Array.from({ length: MAX_IMPRESION }, (_, i) => (
                    <svg
                      key={i}
                      className={i < impresion ? '' : 'vacio'}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  ))}
                </div>
              </div>
            )}

            <div className="d-flex flex-wrap gap-2">
              <button className="btn-accent" onClick={handleAgregar}>
                {agregado ? '¡Agregado!' : 'Agregar al carrito'}
              </button>
              <button className="btn-secundario" onClick={onCerrar}>Cerrar</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default FichaRegalo