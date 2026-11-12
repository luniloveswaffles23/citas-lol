const razas = ['Todas', 'Humanos', 'Vastayas', 'Del Vacío', 'Yordles']

function PanelFiltros({ busqueda, setBusqueda, distancia, setDistancia, raza, setRaza }) {
  return (
    <aside className="filtros">
      <label htmlFor="busqueda" className="d-block fw-bold mb-2">Buscar campeón</label>
      <input
        id="busqueda"
        type="search"
        className="input-citas"
        placeholder="Nombre del campeón"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <label htmlFor="km" className="d-flex justify-content-between fw-bold mt-4 mb-2">
        <span>Distancia máxima</span>
        <span style={{ color: 'var(--accent)' }}>{distancia} km</span>
      </label>
      <input
        id="km"
        type="range"
        min="1"
        max="100"
        value={distancia}
        onChange={(e) => setDistancia(Number(e.target.value))}
        className="slider-citas"
        style={{ '--pct': `${((distancia - 1) / 99) * 100}%` }}
        />
        <div className="d-flex justify-content-between texto-suave small mt-1">
        <span>1 km</span>
        <span>100 km</span>
        </div>

      <p className="fw-bold mt-4 mb-2">Raza</p>
      <div className="d-flex flex-wrap gap-2">
        {razas.map((r) => (
          <button
            key={r}
            className={raza === r ? 'chip activo' : 'chip'}
            onClick={() => setRaza(r)}
          >
            {r}
          </button>
        ))}
      </div>
    </aside>
  )
}
export default PanelFiltros