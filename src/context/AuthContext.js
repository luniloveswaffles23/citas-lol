import { createContext, useContext } from 'react'

// Guarda el usuario que inició sesión: { id, nombre, correo, rol } o null
export const AuthContext = createContext({
  usuario: null,
  iniciar: () => {},
  cerrar: () => {},
})

// Uso: const { usuario, iniciar, cerrar } = useAuth()
export const useAuth = () => useContext(AuthContext)
