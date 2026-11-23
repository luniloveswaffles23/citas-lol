import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CAMPEONES = [
  {
    id: 'ahri',
    nombre: 'Ahri',
    rol: 'Mid',
    estilo: 'Romántico',
    frase: '¿Me dejas robarte el corazón... o al menos el blue?',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    compatibilidad: '98%'
  },
  {
    id: 'lux',
    nombre: 'Lux',
    rol: 'Support / Mid',
    estilo: 'Alegre',
    frase: 'Ilumino tus partidas y también tus noches.',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg',
    compatibilidad: '96%'
  },
  {
    id: 'kaisa',
    nombre: "Kai'sa",
    rol: 'ADC',
    estilo: 'Competitivo',
    frase: 'Busco un Support que me cubra la espalda en el Vacío.',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg',
    compatibilidad: '95%'
  },
  {
    id: 'velkoz',
    nombre: "Vel'koz",
    rol: 'Mid / Support',
    estilo: 'Intelectual',
    frase: 'Analizando la química exacta entre nosotros dos.',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg',
    compatibilidad: '91%'
  },
  {
    id: 'teemo',
    nombre: 'Teemo',
    rol: 'Top',
    estilo: 'Travieso',
    frase: 'Pequeño, letal y siempre listo para una cita sorpresa.',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg',
    compatibilidad: '89%'
  },
  {
    id: 'lulu',
    nombre: 'Lulu',
    rol: 'Support',
    estilo: 'Alegre',
    frase: '¡Eso sabe a morado! Vamos a hacer magia en botlane.',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg',
    compatibilidad: '94%'
  },
  {
    id: 'neeko',
    nombre: 'Neeko',
    rol: 'Mid / Support',
    estilo: 'Alegre',
    frase: 'Neeko es la mejor decisión para tu próxima cita.',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg',
    compatibilidad: '97%'
  },
  {
    id: 'garen',
    nombre: 'Garen',
    rol: 'Top',
    estilo: 'Protector',
    frase: '¡Por Demacia! Y por una cena tranquila después de ranked.',
    imagen: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg',
    compatibilidad: '93%'
  }
]

const ESTILOS = ['Todos', 'Romántico', 'Alegre', 'Competitivo', 'Protector', 'Intelectual', 'Travieso']

function Inicio() {
  const navigate = useNavigate()
  const [estiloActivo, setEstiloActivo] = useState('Todos')

  // Ajusta '/login' si tu ruta de inicio de sesión tiene otro nombre (ej. '/iniciar-sesion')
  const irALogin = () => navigate('/login')

  const campeonesFiltrados =
    estiloActivo === 'Todos'
      ? CAMPEONES
      : CAMPEONES.filter((c) => c.estilo === estiloActivo)

  return (
    <div className="inicio-citas pb-5">
      {/* HERO PRINCIPAL */}
      <section className="container py-5">
        <div className="hero-inicio p-4 p-md-5">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <span className="badge-inicio mb-3 d-inline-block">
                citas.lol · Emparejamiento en la Grieta
              </span>
              <h1 className="display-4 fw-bold mb-3">
                Deja de hacer cola solo. Encuentra tu <span className="texto-acento">dúo perfecto</span>.
              </h1>
              <p className="texto-suave fs-5 mb-4">
                Conecta con los campeones más icónicos de League of Legends, elige regalos exclusivos de la tienda y arma tu próxima cita en la Grieta del Invocador.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn-accent btn-lg" onClick={irALogin}>
                  Descubre tu duo ahora
                </button>
                <a href="#campeones-preview" className="btn-outline-accent text-decoration-none">
                  Ver campeones
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="tarjeta p-3">
                <div className="foto foto-campeon mb-3">
                  <img src={CAMPEONES[0].imagen} alt={CAMPEONES[0].nombre} />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h3 className="h5 mb-0 fw-bold">{CAMPEONES[0].nombre}</h3>
                  <span className="badge-compatibilidad">{CAMPEONES[0].compatibilidad} Match</span>
                </div>
                <p className="texto-suave small mb-2">{CAMPEONES[0].rol} · {CAMPEONES[0].estilo}</p>
                <p className="small fst-italic mb-3">"{CAMPEONES[0].frase}"</p>
                <button className="btn-accent w-100" onClick={irALogin}>
                  Conectar con {CAMPEONES[0].nombre}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA (3 PASOS) */}
      <section className="container py-4">
        <div className="text-center mb-4">
          <h2 className="h3 fw-bold">¿Cómo funciona citas.lol?</h2>
          <p className="texto-suave">Tres pasos rápidos antes de saltar a la Grieta</p>
        </div>

        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="tarjeta p-4 text-center">
              <div className="paso-numero mx-auto mb-3">1</div>
              <h3 className="h5 fw-bold">Crea tu cuenta</h3>
              <p className="texto-suave small mb-0">
                Inicia sesión o regístrate en segundos para desbloquear todos los perfiles disponibles.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="tarjeta p-4 text-center">
              <div className="paso-numero mx-auto mb-3">2</div>
              <h3 className="h5 fw-bold">Filtra y haz Match</h3>
              <p className="texto-suave small mb-0">
                Explora por distancia, raza y revisa el Match del Día dentro de Main.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="tarjeta p-4 text-center">
              <div className="paso-numero mx-auto mb-3">3</div>
              <h3 className="h5 fw-bold">Envía un regalo</h3>
              <p className="texto-suave small mb-0">
                Sorprende a tu campeón favorito con objetos exclusivos de la Grieta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECCIÓN DE DÚO (SOLO LOS 8 CAMPEONES) */}
      <section id="campeones-preview" className="container py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <h2 className="h3 fw-bold mb-1">Campeones buscando dúo</h2>
            <p className="texto-suave mb-0">Filtra por vibra y entra a conocerlos</p>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {ESTILOS.map((estilo) => (
              <button
                key={estilo}
                className={`chip ${estiloActivo === estilo ? 'activo' : ''}`}
                onClick={() => setEstiloActivo(estilo)}
              >
                {estilo}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-3">
          {campeonesFiltrados.map((c) => (
            <div className="col-12 col-sm-6 col-lg-3" key={c.id}>
              <button className="tarjeta-click h-100" onClick={irALogin}>
                <div className="tarjeta d-flex flex-column">
                  <div className="foto mb-3">
                    <img src={c.imagen} alt={c.nombre} />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h3 className="h6 fw-bold mb-0">{c.nombre}</h3>
                    <span className="badge-compatibilidad">{c.compatibilidad}</span>
                  </div>
                  <p className="texto-suave small mb-2">{c.rol}</p>
                  <p className="small texto-suave fst-italic mb-0 mt-auto">"{c.frase}"</p>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn-accent btn-lg" onClick={irALogin}>
            Descubre tu duo ahora
          </button>
        </div>
      </section>
    </div>
  )
}

export default Inicio