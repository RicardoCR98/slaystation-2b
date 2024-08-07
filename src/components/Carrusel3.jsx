import { CardLarge } from './CardLarge.jsx';

export const Carrusel3 = ({ products }) => {
  return (
    <div className='flex-wrap justify-center gap-4'>
      {products.map((product, index) => (
        <div key={index}>
          <CardLarge
            name={product.product_name}
            price={product.product_price}
            quantity={product.product_stock}
            photo={product.product_image}
          />
        </div>
      ))}
    </div>
  );
};
