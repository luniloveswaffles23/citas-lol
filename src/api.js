import axios from 'axios'

// URL del backend (Spring Boot en Render).
// En local, si no hay .env, usa el backend corriendo en tu PC.
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

const api = axios.create({
  baseURL: `${API_URL}/api`,
  // Render (plan gratis) puede tardar ~1 min en "despertar"
  timeout: 90000,
})

export const obtenerCampeones = () => api.get('/campeones').then((res) => res.data)
export const obtenerProductos = () => api.get('/productos').then((res) => res.data)

// ===== Usuarios =====
// Devuelven { id, nombre, correo, rol } o lanzan un error de axios
export const registrarUsuario = ({ nombre, correo, password }) =>
  api.post('/usuarios/registro', { nombre, correo, password }).then((res) => res.data)

export const iniciarSesion = ({ correo, password }) =>
  api.post('/usuarios/login', { correo, password }).then((res) => res.data)

// Convierte un error de axios en { mensaje, campo } para mostrarlo en el formulario.
// El backend responde errores como { "error": "...", "campo": "correo" }
export function leerError(error) {
  const datos = error?.response?.data
  if (datos?.error) {
    return { mensaje: datos.error, campo: datos.campo || null }
  }
  if (error?.code === 'ECONNABORTED') {
    return { mensaje: 'El servidor tardó demasiado en responder. Inténtalo de nuevo.', campo: null }
  }
  return { mensaje: 'No se pudo conectar con el servidor. Inténtalo de nuevo.', campo: null }
}

export default api
