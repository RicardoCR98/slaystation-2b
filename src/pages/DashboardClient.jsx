import { useEffect, useState } from 'react';
import { Carrusel } from '../components/Carrusel';
import { Carrusel2 } from '../components/Carrusel2';
import { Navbar } from '../components/Navbar';

export const DashboardClient = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:8080/api/products/all')
    .then((res) => res.json())
      .then((data) => setProductos(data));
  }, [productos])

  return (
    <div className='bg-gray-900 flex flex-col gap-4'>
      <Navbar photo='src/assets/img-login.jpg' condition='0' />
      <Carrusel2 products={productos} />
      <h1 className='text-white text-2xl font-bold text-center'>Productos</h1>
      <Carrusel products={productos} type='Buy' />
      {/* <WebSocketProvider>
        <Chat nickname='user1' photo='src\assets\support2.webp' type='Help U' />
      </WebSocketProvider> */}
    </div>
  );
};

export default DashboardClient;
