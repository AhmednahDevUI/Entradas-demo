import { Link, useParams } from 'react-router'
import { eventos } from '../data/eventos'
import SelectorCantidad from '../components/SelectorCantidad'


function EventoDetalle() {
    const { id } = useParams()
    const evento = eventos.find((e) => e.id === Number(id))

    if (!evento) {
        return (
        <section>   
        <h2>Evento no encontrado</h2>
        <Link to="/eventos">Volver a la lista</Link>
        </section>
        )
    }


    return (
        <section>
            <h2>{evento.titulo}</h2>
            <p>
                {new Date(evento.fecha).toLocaleDateString('es-ES', { dateStyle: 'full' })}
            </p>
            <p>{evento.lugar}</p>
            <p>Precio: {evento.precio} €</p>
            <SelectorCantidad precio={evento.precio} />
            <button disabled >Comprar (disponible en la Fase 6)</button>
            <p>
                <Link to="/eventos">Volver a la lista</Link>
            </p>
        </section>
    )
}

export default EventoDetalle