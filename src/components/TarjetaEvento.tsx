import SelectorCantidad from './SelectorCantidad'

type TarjetaEventoProps = {
    titulo: string
    fecha: string
    precio: number
    lugar: string
}

function TarjetaEvento({ titulo, fecha, precio, lugar }: TarjetaEventoProps) {
    return (
        <article>
            <h2>{titulo}</h2>
            <p>{fecha}</p>
            <p>Precio: {precio} €</p>
            <p>Cantidad: <SelectorCantidad precio={precio} /></p>
            <p>Lugar: {lugar}</p>
        </article>
    )
}

export default TarjetaEvento