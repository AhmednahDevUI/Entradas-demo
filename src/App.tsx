import { Route, Routes } from 'react-router'
import Cabecera from './components/Cabecera'
import Inicio from './pages/Inicio'
import Eventos from './pages/Eventos'
import EventoDetalle from './pages/EventoDetalle'
import NoEncontrada from './pages/NoEncontrada'

function App() {
  return (
    <main className= "contenedor">
      <Cabecera />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/:id" element={<EventoDetalle />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </main>
  )
}

export default App