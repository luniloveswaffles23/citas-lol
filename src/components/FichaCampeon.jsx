import { useState } from 'react'
import { Modal } from 'react-bootstrap'

// Cada raza tiene su propio color de acento en la ficha
const COLOR_RAZA = {
  Vastayas: '#5EEAD4',
  Humanos: '#F6C177',
  'Del Vacío': '#B794F6',
  Yordles: '#86EFAC',
}

function FichaCampeon({ personaje, onCerrar, onMeGusta }) {
  const [copiado, setCopiado] = useState(false)

  if (!personaje) return null

  const color = COLOR_RAZA[personaje.raza] || 'var(--accent)'
  const foto = personaje.imagen || personaje.foto

  const copiarUsuario = async () => {
    try {
      await navigator.clipboard.writeText(personaje.instagram)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <Modal
      show
      onHide={onCerrar}
      centered
      size="lg"
      contentClassName="modal-citas"
      aria-labelledby="ficha-titulo"
    >
      <Modal.Body className="p-0">
        <div className="ficha" style={{ '--ficha-color': color }}>
          <button className="ficha-cerrar" onClick={onCerrar} aria-label="Cerrar ficha">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="ficha-foto">
            {foto ? (
              <img
                src={foto}
                alt={personaje.nombre}
                style={{ objectPosition: personaje.posicion_foto || 'center 20%' }}
              />
            ) : (
              <span className="texto-suave">[FOTO]</span>
            )}
          </div>

          <div className="ficha-info">
            <h2 id="ficha-titulo" className="ficha-nombre">{personaje.nombre}</h2>

            <div className="ficha-datos">
              <span className="ficha-dato raza">{personaje.raza}</span>
              <span className="ficha-dato">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                a {personaje.distancia_km} km de ti
              </span>
            </div>

            <blockquote className="ficha-bio">“{personaje.descripcion}”</blockquote>

            <div className="ficha-ig">
              <svg className="ficha-ig-icono" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <span className="ficha-ig-usuario">{personaje.instagram}</span>
              <button className="btn-secundario" onClick={copiarUsuario}>
                {copiado ? '¡Copiado!' : 'Copiar'}
              </button>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <button
                className="btn-accent d-inline-flex align-items-center gap-2"
                onClick={() => onMeGusta && onMeGusta(personaje)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Me gusta
              </button>
              <button className="btn-secundario" onClick={onCerrar}>Cerrar</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default FichaCampeon