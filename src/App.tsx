import TarjetaEvento from './components/TarjetaEvento'
import Cabecera from './components/Cabecera'
import { eventos } from './data/eventos'

function App() {
 return (

  
  <main>
    <Cabecera />
    <p>Proyecto en construcción</p>
    <p>Desarrolado por [Ahmednah Mohamed Saleh]</p>

    <ul>
      <li>Ver eventos</li>
      <li>Comprar entradas</li>
      <li>Validar acceso</li>
    </ul>

      <TarjetaEvento titulo="Concierto de verano" fecha="20 de junio" precio={15} lugar="Plaza Mayor" />
      

      {eventos.map((evento) => (
        <TarjetaEvento
          key={evento.id}
          titulo={evento.titulo}
          fecha={evento.fecha}
          precio={evento.precio}
          lugar={evento.lugar}
        />
      ))  }
  </main>
 )
}

export default App
