import { useSelector } from 'react-redux';

import '../css/cartItem.css';
import idSample from '../assets/products/ID/ID-BSEMC.png';

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const items = useSelector((state) => state.item.items);
  const filteredItems = items.filter((item) => cartItems.find((cartItem) => cartItem.itemId === item._id));

  return (
    <>
      <div className="item">
        <input className="cart-checkbox" type="checkbox" name="" id="" />
        <div className="cart-item">
          <img src={idSample} alt="" />
          <div className="item-details">
            <h3 className="item-label">Cardigan</h3>
            <p>Medium</p>
          </div>
        </div>
        <div className="quantity">
          <button>&#8854;</button>
          <input placeholder="1" type="number" />
          <button>&oplus;</button>
        </div>
        <p className="item-price">&#8369;2000</p>
      </div>
      <div className="item">
        <input className="cart-checkbox" type="checkbox" name="" id="" />
        <div className="cart-item">
          <img src={idSample} alt="" />
          <div className="item-details">
            <h3 className="item-label">Cardigan</h3>
            <p>Medium</p>
          </div>
        </div>
        <div className="quantity">
          <button>&#8854;</button>
          <input placeholder="1" type="number" />
          <button>&oplus;</button>
        </div>
        <p className="item-price">&#8369;2000</p>
      </div>
    </>
  );
};

export default CartItem;
