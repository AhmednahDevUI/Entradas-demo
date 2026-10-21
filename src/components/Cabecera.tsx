import { Link } from "react-router"

function Cabecera() {
  return (
    <header>
      <h1>Entradas Demo</h1>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/eventos">Eventos</Link>
      </nav>
    </header>
  )
}

export default Cabecera