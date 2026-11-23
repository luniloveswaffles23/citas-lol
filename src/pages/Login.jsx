import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [errores, setErrores] = useState({})

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validar()) {
      // Si es admin@citas.lol redirige al panel Admin, si no al Inicio
      if (correo.toLowerCase() === 'admin@citas.lol') {
        navigate('/admin')
      } else {
        navigate('/main')
      }
    }
  }

  return (
    <div className="container mt-4 pb-5" style={{ maxWidth: 450 }}>
      <div className="tarjeta p-4">
        <h1 className="h3 mb-1">Iniciar sesión</h1>
        <p className="texto-suave mb-4">Ingresa con tu cuenta de citas.lol</p>

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

          <button type="submit" className="btn-accent w-100 mb-3">
            Entrar
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