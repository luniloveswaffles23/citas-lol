import { useEffect, useState } from 'react'

// Llama a una función del api.js y devuelve { datos, cargando, error }.
// Ej: const { datos: personajes, cargando, error } = useDatos(obtenerCampeones)
export function useDatos(cargar) {
  const [estado, setEstado] = useState({ datos: [], cargando: true, error: null })

  useEffect(() => {
    let activo = true
    cargar()
      .then((datos) => {
        if (activo) setEstado({ datos, cargando: false, error: null })
      })
      .catch((error) => {
        console.error(error)
        if (activo) setEstado({ datos: [], cargando: false, error })
      })
    return () => {
      activo = false
    }
  }, [cargar])

  return estado
}
