import { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, clearCart , removeFromCart, addToCart} = useContext(CartContext);
  // useEffect(() =>{
  //   numero = 0;
  //   cart.forEach((product) => numero+=product);
  //   return numero;
  // }, [cart]);

  const [numero, setNumero] = useState(0);

  useEffect(() => {
    let suma = 0;
    cart.forEach((product) => suma += product.quantity);
    setNumero(suma);
  }, [cart]);
  
  

  return (
    <>
      <label className='cart-button' htmlFor='cart' > {numero}🛒  </label>
      <input id='cart' type='checkbox' hidden />
      
      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.description} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <footer>
                <small>Quantity: {product.quantity}</small>
                <button onClick={() => addToCart(product)}>+</button>
                { <button onClick={() => removeFromCart(product)}> - </button> }
              </footer>
            </li>
          ))}
        </ul>

        <button onClick={clearCart}>Clear cart</button>
      </aside>
    </>
  );
}
