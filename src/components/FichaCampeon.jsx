import { Modal } from 'react-bootstrap'

function FichaCampeon({ personaje, onCerrar, onMeGusta }) {
  if (!personaje) return null

  return (
    <Modal
      show
      onHide={onCerrar}
      centered
      size="lg"
      contentClassName="modal-citas"
      aria-labelledby="ficha-titulo"
    >
      <Modal.Header closeButton closeVariant="white" className="border-0" />
      <Modal.Body className="pt-0 pb-4 px-4">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-5">
            <div className="foto foto-campeon">
              {personaje.imagen
                ? <img src={personaje.imagen} alt={personaje.nombre} style={{ objectPosition: personaje.posicion || 'center top' }}
                loading="lazy" />
                : "[FOTO]"}
            </div>
          </div>

          <div className="col-12 col-md-7">
            <h2 id="ficha-titulo" className="display-6 mb-1">{personaje.nombre}</h2>
            <p className="texto-suave mb-1">{personaje.raza} · a {personaje.distancia_km} km de ti</p>
            <p className="texto-suave mb-4">{personaje.descripcion}</p>

            <p className="fw-bold mb-2" style={{ color: 'var(--second)' }}>Instagram</p>
            <div className="instagram-box mb-4">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              {personaje.instagram}
            </div>

            <div className="d-flex flex-wrap gap-2">
              <button className="btn-accent" onClick={() => onMeGusta && onMeGusta(personaje)}>Me gusta</button>
              <button className="btn-secundario" onClick={onCerrar}>Cerrar</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default FichaCampeon