import { Carrusel3 } from "../components/Carrusel3";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const products1 = [
  {
    name: "Impresora 3D Anycubic Kobra Plus",
    price: 690,
    quantity: 5,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_810219-MLA50000033018_052022-O.webp",
  },
  {
    name: "Impresora 3D Creality Cr-30",
    price: 1782,
    quantity: 3,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Impresora 3D Anycubic Kobra Plus",
    price: 690,
    quantity: 5,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_810219-MLA50000033018_052022-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
];

export const DashboardBusqueda = () => {
    return (
        <div className='grid grid-rows-[auto_1fr] grid-cols-1 h-full'>
          {/* Header en la parte superior */}
          <header className='bg-gray-800 text-white p-4'>
            <Navbar photo='src/assets/img-login.jpg' />
          </header>
          
          {/* Contenedor principal con Sidebar y Carrusel */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] h-full dark:bg-gray-800">
            <aside className="hidden md:block dark:bg-gray-800">
              <Sidebar />
            </aside>
    
            <main className="dark:bg-gray-800 p-4">
              <Carrusel3 products={products1} />
            </main>
          </div>
        </div>
      );
};
export default DashboardBusqueda;