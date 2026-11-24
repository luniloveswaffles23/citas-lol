import { Spinner } from 'react-bootstrap'

// Muestra "cargando..." o un error mientras se piden datos al backend
function EstadoCarga({ cargando, error, texto }) {
  if (cargando) {
    return (
      <p className="texto-suave d-flex align-items-center gap-2" role="status">
        <Spinner animation="border" size="sm" />
        Cargando {texto}… si el servidor estaba dormido puede tardar hasta un minuto.
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-danger d-flex flex-wrap align-items-center gap-2" role="alert">
        No se pudieron cargar los {texto}.
        <button className="btn-secundario" onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </p>
    )
  }

  return null
}

export default EstadoCarga
