function TarjetaPersonaje({ personaje, onMeGusta }) {
  return (
    <div className="tarjeta">
      <div className="foto">[FOTO]</div>
      <h3 className="h5 mt-3 mb-1">{personaje.nombre}</h3>
      <p className="texto-suave mb-1">{personaje.raza} · a {personaje.distancia_km} km</p>
      <p className="texto-suave">{personaje.descripcion}</p>
      <button className="btn-accent w-100" onClick={() => onMeGusta && onMeGusta(personaje)}>
        Me gusta
      </button>
    </div>
  )
}
export default TarjetaPersonaje