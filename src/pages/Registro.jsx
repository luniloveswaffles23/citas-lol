import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Registro() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    password: '',
    confirmarPassword: ''
  })
  const [errores, setErrores] = useState({})
  const [exito, setExito] = useState(false)

  const validar = () => {
    const nuevosErrores = {}
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/

    if (!form.nombre.trim() || form.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre de invocador debe tener al menos 3 caracteres.'
    }

    if (!regexCorreo.test(form.correo)) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido (ej: usuario@duocuc.cl).'
    }

    if (!regexPassword.test(form.password)) {
      nuevosErrores.password = 'La contraseña debe tener mínimo 6 caracteres, una mayúscula y un número.'
    }

    if (form.password !== form.confirmarPassword) {
      nuevosErrores.confirmarPassword = 'Las contraseñas no coinciden.'
    }

    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validar()) {
      setExito(true)
      setTimeout(() => navigate('/login'), 1500)
    }
  }

  return (
    <div className="container mt-4 pb-5" style={{ maxWidth: 480 }}>
      <div className="tarjeta p-4">
        <h1 className="h3 mb-1">Crear cuenta</h1>
        <p className="texto-suave mb-4">Únete a citas.lol y encuentra tu dúo ideal.</p>

        {exito && (
          <div className="alert alert-success py-2 small fw-bold">
            ¡Cuenta creada con éxito! Redirigiendo al inicio de sesión...
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="reg-nombre" className="d-block fw-bold mb-1">Nombre de Invocador</label>
            <input
              id="reg-nombre"
              type="text"
              className="input-citas"
              placeholder="Ej: AhriMain#LAS"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
            {errores.nombre && <small className="text-danger d-block mt-1">{errores.nombre}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="reg-correo" className="d-block fw-bold mb-1">Correo electrónico</label>
            <input
              id="reg-correo"
              type="email"
              className="input-citas"
              placeholder="nombre@correo.com"
              value={form.correo}
              onChange={(e) => setForm({ ...form, correo: e.target.value })}
            />
            {errores.correo && <small className="text-danger d-block mt-1">{errores.correo}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="reg-pass" className="d-block fw-bold mb-1">Contraseña</label>
            <input
              id="reg-pass"
              type="password"
              className="input-citas"
              placeholder="Mín. 6 caracteres, 1 mayúscula y 1 número"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {errores.password && <small className="text-danger d-block mt-1">{errores.password}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="reg-confirm" className="d-block fw-bold mb-1">Confirmar contraseña</label>
            <input
              id="reg-confirm"
              type="password"
              className="input-citas"
              placeholder="Repite tu contraseña"
              value={form.confirmarPassword}
              onChange={(e) => setForm({ ...form, confirmarPassword: e.target.value })}
            />
            {errores.confirmarPassword && (
              <small className="text-danger d-block mt-1">{errores.confirmarPassword}</small>
            )}
          </div>

          <button type="submit" className="btn-accent w-100 mb-3">
            Registrarse
          </button>

          <p className="texto-suave text-center small mb-0">
            ¿Ya tienes cuenta? <Link to="/login" style={{ color: 'var(--accent)' }}>Inicia sesión aquí</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
export default Registro