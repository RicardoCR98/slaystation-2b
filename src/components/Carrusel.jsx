import { useRef, useState } from 'react';
import { Card } from './Card';
import ProductModal from './ProductModal';
import { NewProductModal } from './NewProductModal';

export const Carrusel = ({ products, type }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const carruselRef = useRef(null);

  const scrollLeft = () => {
    carruselRef.current.scrollBy({ left: -1400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carruselRef.current.scrollBy({ left: 1400, behavior: 'smooth' });
  };

  const handleProductClick = (product) => {
    console.log(product);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='relative'>
      <button
        className='absolute top-0 left-2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={scrollLeft}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-200'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <div
        className='flex overflow-x-hidden space-x-10 p-10 bg-gray-800 rounded-lg scrollbar-hide snap-x snap-mandatory'
        ref={carruselRef}
      >
        {products.map((product) => (
          <div
            className='flex-shrink-0 w-64 bg-gray-900 p-4 rounded-lg shadow-lg snap-center transition-transform duration-75 ease-in-out hover:scale-105 cursor-pointer'
            key={product.productId}
            onClick={() => handleProductClick(product)}
          >
            <Card
              product_name={product.productName}
              product_price={product.productPrice}
              product_stock={product.productStock}
              product_image={product.productImage}
              product_type={type}
            />
          </div>
        ))}
      </div>
      <button
        className='absolute top-0 right-2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={scrollRight}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-200'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
      {selectedProduct && type === 'Buy' && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
      {selectedProduct && type === 'Edit' && (
        <NewProductModal
          isOpen={Boolean(selectedProduct)}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};
