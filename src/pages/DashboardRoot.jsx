import { useEffect, useState } from 'react';
import { Carrusel } from '../components/Carrusel';
import { Carrusel2 } from '../components/Carrusel2';
import { Navbar } from '../components/Navbar';
import { NewProductModal } from '../components/NewProductModal';

export const DashboardRoot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products/all')
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, [productos]);

  return (
    <div className='bg-gray-900 flex flex-col gap-4'>
      <Navbar photo='src/assets/img-login.jpg' condition='0' />
      <Carrusel2 products={productos} />
      <h1 className='text-white text-2xl font-bold text-center'>Productos</h1>
      <Carrusel products={productos} type='Edit' />
      <button
        type='button'
        onClick={() => setIsModalOpen(true)}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 max-w-24 mx-auto mb-5'
      >
        ADD
      </button>
      <NewProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className='z-50  fixed right-0 bottom-0 mr-4 mb-8'>
        <img
          className='w-10 h-10 rounded-full'
          src='https://flowbite.com/docs/images/products/apple-watch.png'
          alt=''
        />
        <span className='top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
      </div>
      {/* <Chat /> */}
    </div>
  );
};
export default DashboardRoot;
