import { Link } from 'react-router'
import type { Evento } from '../data/eventos'
import SelectorCantidad from './SelectorCantidad'

type Props = {
  evento: Evento
}

function TarjetaEvento({ evento }: Props) {
  return (
    <article className="tarjeta">
      <h2>
        <Link to={`/eventos/${evento.id}`}>{evento.titulo}</Link>
      </h2>
      <p>{evento.fecha}</p>
      <p>{evento.lugar}</p>
      <p>Precio: {evento.precio} €</p>
      <SelectorCantidad precio={evento.precio} />
    </article>
  )
}

export default TarjetaEvento