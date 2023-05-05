import { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';

import { updateCartQuantity } from '../actions/cartActions';

import noImg from '../assets/no-image.jpg';

import '../css/cartItem.css';

const CartItem = (props) => {
  const { mainCheckbox } = props;
  const items = useSelector((state) => state.item.items);
  const userId = useSelector((state) => state.auth.user.id);
  const token = useSelector((state) => state.auth.token);
  const cartItems = useSelector((state) => state.cart.items);
  const [itemCheckbox, setItemCheckbox] = useState(mainCheckbox);

  const filteredItems = items?.filter((item) => cartItems?.find((cartItem) => cartItem.itemId === item._id));
  const newCartItems = cartItems?.map((cartItem, index) => {
    const filteredItem = filteredItems?.find((filteredItem) => filteredItem._id === cartItem.itemId);

    const newCartItem = {
      ...cartItem,
      label: filteredItem.label,
      img: filteredItem.img_url[0],
      price: filteredItem.price
    };

    return newCartItem;
  });

  const handleButtonClick = (cartItem, purpose) => {
    const { itemId, size } = cartItem;

    newCartItems.forEach((cartItem) => {
      if (cartItem.itemId === itemId && cartItem.size === size) {
        const updatedCartItem = { ...cartItem };

        if (purpose === 'increment') {
          updatedCartItem.quantity += 1;
        }

        if (purpose === 'decrement' && updatedCartItem.quantity > 1) {
          updatedCartItem.quantity -= 1;
        }

        props.updateCartQuantity({ token, userId, updatedCartItem });
      }
    });
  };

  const handleCheckbox = (e) => {
    setItemCheckbox(e.target.checked);
  };

  useEffect(() => {
    setItemCheckbox(mainCheckbox);
  }, [mainCheckbox]);

  return !newCartItems ? (
    <p>No Items</p>
  ) : (
    <>
      {newCartItems.map((cartItem) => (
        <div key={cartItem._id} className="item">
          <input
            className="cart-checkbox"
            type="checkbox"
            name=""
            checked={itemCheckbox}
            onChange={(e) => {
              handleCheckbox(e);
            }}
          />
          <div className="cart-item">
            <img src={cartItem.img || noImg} alt="" />
            <div className="item-details">
              <h3 className="item-label">{cartItem.label}</h3>
              <p>{cartItem.size}</p>
            </div>
          </div>
          <div className="quantity">
            <button
              onClick={() => {
                handleButtonClick(cartItem, `decrement`);
              }}
            >
              &#8854;
            </button>
            <input value={cartItem.quantity} type="number" readOnly />
            <button
              onClick={() => {
                handleButtonClick(cartItem, `increment`);
              }}
            >
              &oplus;
            </button>
          </div>
          <p className="item-price">{`\u20B1${cartItem.price * cartItem.quantity}`}</p>
        </div>
      ))}
    </>
  );
};

const mapDispatchToProps = { updateCartQuantity };

export default connect(null, mapDispatchToProps)(CartItem);
