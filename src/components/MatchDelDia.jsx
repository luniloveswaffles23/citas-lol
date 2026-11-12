import { useState } from 'react'

function MatchDelDia({ personaje }) {
  const [meGustas, setMeGustas] = useState(0)

  return (
    <section className="hero-match mb-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-4">
          <div className="foto" style={{ height: 240 }}>[FOTO]</div>
        </div>
        <div className="col-12 col-md-8">
          <p className="mb-0 fw-bold" style={{ color: 'var(--second)' }}>Match del día</p>
          <h2 className="display-6 mt-1 mb-2">{personaje.nombre}</h2>
          <p className="texto-suave mb-1">{personaje.raza} · a {personaje.distancia_km} km</p>
          <p className="texto-suave mb-3">{personaje.descripcion}</p>

          <p className="mb-3 d-flex align-items-center gap-2" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.9 5 6.2 5c2 0 3.3 1.1 3.8 2 .5-.9 1.8-2 3.8-2 3.3 0 5.3 3.4 3.8 6.8C19.5 16.4 12 21 12 21z" />
            </svg>
            {meGustas} me gustas
          </p>

          <div className="d-flex flex-wrap gap-2">
            <button className="btn-accent" onClick={() => setMeGustas(meGustas + 1)}>Me gusta</button>
            <button className="btn-secundario">Ver perfil</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MatchDelDia