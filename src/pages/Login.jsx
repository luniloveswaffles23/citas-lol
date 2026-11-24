import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { iniciarSesion, leerError } from '../api'
import { useAuth } from '../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { iniciar } = useAuth()
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [errores, setErrores] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [errorGeneral, setErrorGeneral] = useState('')

  const validar = () => {
    const nuevosErrores = {}
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!regexCorreo.test(correo)) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido.'
    }

    if (password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres.'
    }

    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorGeneral('')
    if (!validar() || enviando) return

    setEnviando(true)
    try {
      // El backend comprueba correo y contraseña en Neon
      const usuario = await iniciarSesion({ correo: correo.trim(), password })
      iniciar(usuario)
      // Si el usuario es administrador va al panel Admin, si no a Main
      navigate(usuario.rol === 'ADMIN' ? '/admin' : '/main')
    } catch (error) {
      setErrorGeneral(leerError(error).mensaje)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="container mt-4 pb-5" style={{ maxWidth: 450 }}>
      <div className="tarjeta p-4">
        <h1 className="h3 mb-1">Iniciar sesión</h1>
        <p className="texto-suave mb-4">Ingresa con tu cuenta de citas.lol</p>

        {errorGeneral && (
          <div className="alert alert-danger py-2 small fw-bold" role="alert">
            {errorGeneral}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="login-correo" className="d-block fw-bold mb-1">Correo electrónico</label>
            <input
              id="login-correo"
              type="email"
              className="input-citas"
              placeholder="nombre@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            {errores.correo && <small className="text-danger d-block mt-1">{errores.correo}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="login-pass" className="d-block fw-bold mb-1">Contraseña</label>
            <input
              id="login-pass"
              type="password"
              className="input-citas"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errores.password && <small className="text-danger d-block mt-1">{errores.password}</small>}
          </div>

          <button type="submit" className="btn-accent w-100 mb-3" disabled={enviando}>
            {enviando ? 'Entrando…' : 'Entrar'}
          </button>

                    <p className="texto-suave text-center small mb-0">
            ¿No tienes cuenta? <Link to="/registro" style={{ color: 'var(--accent)' }}>Regístrate aquí</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
export default Login