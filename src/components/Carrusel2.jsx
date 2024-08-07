import { useState } from 'react';

export const Carrusel2 = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div
      id='controls-carousel'
      className='relative w-full overflow-hidden'
      data-carousel='static'
    >
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.productId}
            className='relative w-full flex-shrink-0 h-56 overflow-hidden rounded-lg md:h-96'
          >
            <img
              src={product.productImage}
              className='absolute block w-full h-full object-contain'
              alt={product.productName}
            />
          </div>
        ))}
      </div>
      <button
        type='button'
        className='absolute top-0 left-2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={prevSlide}
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
      <button
        type='button'
        className='absolute top-0 right-2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={nextSlide}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
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
    </div>
  );
};
