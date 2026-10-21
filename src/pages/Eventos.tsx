import { useState } from 'react'
import { eventos } from '../data/eventos'
import TarjetaEvento from '../components/TarjetaEvento'

function Eventos() {
  const [busqueda, setBusqueda] = useState('')

  const visibles = eventos.filter((e) =>
    e.titulo.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section>
      <h2>Eventos</h2>

      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar evento"
      />

      {visibles.length === 0 && <p>No hay eventos con ese nombre.</p>}


    <div className="rejilla"> 
      {visibles.map((evento) => (
        <TarjetaEvento key={evento.id} evento={evento} />
      ))}
    </div>
    </section>
  )
}

export default Eventos