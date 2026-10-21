import { useState } from 'react'

type Props = {
    precio: number
}

function SelectorCantidad({ precio }: Props) {
    const [cantidad, setCantidad] = useState(1)

    return (
        <div className="selector-cantidad">
            <button disabled={cantidad <= 1} onClick={() => setCantidad(cantidad - 1)}>-</button>
            <span>{cantidad}</span>
            <button disabled={cantidad >= 10} onClick={() => setCantidad(cantidad + 1)}>+</button>

            <p>Total: {cantidad * precio} €</p>
        </div>

    )
}


export default SelectorCantidad