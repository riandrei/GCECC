import { useSelector } from 'react-redux';

import noImg from '../assets/no-image.jpg';

import '../css/cartItem.css';

const CartItem = ({ newCartItems }) => {
  console.log(newCartItems);
  return !newCartItems ? (
    <></>
  ) : (
    <>
      {newCartItems.map((cartItem) => (
        <div key={cartItem._id} className="item">
          <input className="cart-checkbox" type="checkbox" name="" id="" />
          <div className="cart-item">
            <img src={cartItem.img || noImg} alt="" />
            <div className="item-details">
              <h3 className="item-label">{cartItem.label}</h3>
              <p>{cartItem.size}</p>
            </div>
          </div>
          <div className="quantity">
            <button>&#8854;</button>
            <input placeholder="1" type="number" />
            <button>&oplus;</button>
          </div>
          <p className="item-price">{`\u20B1${cartItem.price}`}</p>
        </div>
      ))}
    </>
  );
};

export default CartItem;
