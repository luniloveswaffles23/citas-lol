import { useState } from 'react'
import { AuthContext } from './AuthContext'

const CLAVE = 'citaslol-usuario'

// Lee la sesión guardada para no perderla al recargar la página.
// Solo se guardan id, nombre, correo y rol (nunca la contraseña).
function leerSesionGuardada() {
  try {
    const guardado = localStorage.getItem(CLAVE)
    return guardado ? JSON.parse(guardado) : null
  } catch {
    return null
  }
}

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(leerSesionGuardada)

  const iniciar = (datosUsuario) => {
    setUsuario(datosUsuario)
    try {
      localStorage.setItem(CLAVE, JSON.stringify(datosUsuario))
    } catch {
      // Si el navegador no deja guardar, la sesión dura hasta recargar
    }
  }

  const cerrar = () => {
    setUsuario(null)
    try {
      localStorage.removeItem(CLAVE)
    } catch {
      // nada
    }
  }

  return (
    <AuthContext.Provider value={{ usuario, iniciar, cerrar }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
