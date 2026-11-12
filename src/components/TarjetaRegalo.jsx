function TarjetaRegalo({ producto, onAgregar }) {
  return (
    <div className="tarjeta">
      <div className="foto" style={{ height: 90 }}>[IMAGEN]</div>
      <p className="fw-bold mt-2 mb-0">{producto.nombre}</p>
      <p className="texto-suave">{producto.precio_oro} de oro</p>
      <button className="btn-outline-accent w-100" onClick={() => onAgregar && onAgregar(producto)}>
        Agregar
      </button>
    </div>
  )
}
export default TarjetaRegalo