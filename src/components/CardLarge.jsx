export const CardLarge = ({ name, price, quantity, photo }) => {
    return (
        <div className='w-full h-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center'>
        <div className="flex-grow-[3]">
        <a href='#'>
          <div className='h-52 p-3 overflow-hidden'>
            <img
              className='w-full h-full object-contain'
              src={photo}
              alt={name}
            />
          </div>
        </a>
        </div>

        <div className='px-5 pb-5 flex-grow-[7]'>
          <a href='#'>
            <h5 className='text-4xl  tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>
          </a>
          <p className='mt-2 text-md text-md text-gray-500 dark:text-gray-400'>
            {quantity} left
          </p>
          <div className='flex flex-col space-y-4'>
            <div>
                <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                ${price}
                </span>
            </div>
            {/* <div className='w-full flex'>
                <a
                href='#'
                className='w-80 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                Add to cart
                </a>
            </div> */}
            </div>

        </div>
      </div>
    );
  };
  