import { useState } from 'react'
import { eventos } from './data/eventos'
import TarjetaEvento from './components/TarjetaEvento'
import Cabecera from './components/Cabecera'

function App() {
  const [busqueda, setBusqueda] = useState('')

  const visibles = eventos.filter((e) =>
    e.titulo.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <main>
      <Cabecera />

      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar evento"
      />

      {visibles.length === 0 && <p>No hay eventos con ese nombre.</p>}

      {visibles.map((evento) => (
        <TarjetaEvento key={evento.id} evento={evento} />
      ))}
    </main>
  )
}

export default App
