function TarjetaPersonaje({ personaje, onVer, onMeGusta }) {
  return (
    <div className="tarjeta">
      <button
        className="tarjeta-click"
        onClick={() => onVer && onVer(personaje)}
        aria-label={`Ver perfil de ${personaje.nombre}`}
      >
        <div className="foto">[FOTO]</div>
        <h3 className="h5 mt-3 mb-1">{personaje.nombre}</h3>
        <p className="texto-suave mb-1">{personaje.raza} · a {personaje.distancia_km} km</p>
        <p className="texto-suave">{personaje.descripcion}</p>
      </button>
      <button className="btn-accent w-100" onClick={() => onMeGusta && onMeGusta(personaje)}>
        Me gusta
      </button>
    </div>
  )
}
export default TarjetaPersonaje 