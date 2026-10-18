export type Evento = {
    id: number
  titulo: string
  fecha: string
  precio: number
  lugar: string
}

export const eventos: Evento[] = [
  { id : 1, titulo: 'Evento unico', fecha: '2026-06-20', precio: 15, lugar: 'Plaza Mayor' },
{ id : 2, titulo: 'Entradas en descuento', fecha: '2026-06-27', precio: 6, lugar: 'Cine Central' },

// Agrega más eventos hasta llegar 5
{id : 3, titulo: 'Festival de música', fecha: '2026-07-05', precio: 20, lugar: 'Agromont' },
{ id : 4, titulo: 'Obra de teatro', fecha: '2026-07-12', precio: 10, lugar: 'Teatro Principal' },


]