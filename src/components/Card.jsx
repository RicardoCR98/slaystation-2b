export const Card = ({
  product_name,
  product_price,
  product_stock,
  product_image,
  product_type,
}) => {
  return (
    <div
      className='w-64 max-w-sm min-w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer' // Añade cursor-pointer para indicar que es clicable
    >
      <div className='h-48 p-3 overflow-hidden'>
        <img
          className='w-full h-full object-contain'
          src={product_image}
          alt={product_name}
        />
      </div>
      <div className='px-5 pb-5'>
        <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          {product_name}
        </h5>
        <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
          {product_stock} left
        </p>
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            ${product_price}
          </span>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            {product_type}
          </button>
        </div>
      </div>
    </div>
  );
};
