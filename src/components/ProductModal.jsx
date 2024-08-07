
const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className='absolute inset-0 bg-gray-800 opacity-75'
        onClick={onClose}
      ></div>
      <div className='bg-white dark:bg-gray-900 rounded-lg p-5 relative z-10 w-11/12 md:w-3/4 lg:w-2/3 xl:w-2/3'>
        <button
          type='button'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
          onClick={onClose}
        >
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>Close modal</span>
        </button>
        <div className='flex flex-col md:flex-row p-5'>
          <div className='flex-1 md:flex-grow-[2/3] flex items-center justify-center bg-white p-3'>
            <div className='h-96 md:h-full overflow-hidden'>
              <img
                className='w-full h-full object-contain'
                src={product.productImage}
                alt={product.productName}
              />
            </div>
          </div>
          <div className='flex-1 md:flex-grow-[1/3] flex flex-col justify-center items-center dark:bg-gray-900 rounded-lg p-4 mx-2 mt-4 md:mt-0'>
            <h5 className='text-4xl font-bold tracking-tight text-white text-center'>
              {product.productName}
            </h5>
            <div className='flex flex-col items-center space-y-6 mt-4'>
              <span className='text-5xl font-bold text-white'>
                ${product.productPrice}
              </span>
              <p className='text-md text-white font-bold text-center'>
                State: {product.stateId === 1 ? 'Nuevo' : 'Usado'}
              </p>
              <p className='text-md text-white font-bold text-center'>
                Quantity: {product.productStock} available
              </p>
              <p className='text-md text-white text-center'>
                {product.productDescription}
              </p>
            </div>
            <button className='w-48 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-3 text-center mt-4'>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
