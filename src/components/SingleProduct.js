import React, { useContext } from 'react'
import {Cart} from '../Context'
//Receiving prod,cart,setCart as prop from Home.js
const SingleProduct = ({prod}) => {

  const { cart, setCart } = useContext(Cart);

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹{prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]); //Setting the cart with the value already present and the new product which is going to be add to cart
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct