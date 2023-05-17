import { useLocation } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import '../css/checkout.css';
import hamburgerMenu from '../assets/hamburger-menu.png';

const Checkout = () => {
  const location = useLocation();
  const { checkedItems } = location.state;
  const items = useSelector((state) => state.item.items);

  const checkoutItems = checkedItems?.map((checkedItem, index) => {
    const item = items?.find((item) => item._id === checkedItem.itemId);

    const checkoutItem = {
      ...checkedItem,
      label: item.label,
      img: item.img_url[0],
      price: item.price
    };

    return checkoutItem;
  });

  console.log(checkoutItems);

  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };

  return (
    <div className="checkout-main-container" onClick={toggleNav}>
      <div className="checkout-category">
        <button onClick={toggleNav} className="checkout-menu" id="burger">
          <img className="hamburger-icon" src={hamburgerMenu} alt="" />
        </button>
        <div className="checkout-header">
          <h1>Checkout</h1>
        </div>
      </div>
      <div className="checkout-contents">
        <form className="checkout-form">
          <div className="checkout-form-section">
            <h2>Name</h2>
            <input type="text" />
          </div>
          <div className="checkout-form-section">
            <h2>Department</h2>
            <input type="text" />
          </div>
          <div className="checkout-form-section">
            <h2>Domain</h2>
            <input type="text" />
          </div>
          <div className="checkout-form-section">
            <h2>Payment Method</h2>
            <div>
              <input type="radio" name="payment-methods" id="cash" />
              <label className="cash" htmlFor="cash">
                Cash
              </label>
              <input type="radio" name="payment-methods" id="gcash" />
              <label className="gcash" htmlFor="gcash">
                GCash
              </label>
            </div>
          </div>
        </form>
        <div className="checkout-order">
          <div className="checkout-order-items">
            {checkoutItems.map((checkoutItem) => (
              <div key={checkoutItem._id} className="checkout-order-item">
                <img src={checkoutItem.img} alt="item-picture" />
                <div className="checkout-item-label">
                  <h4>{checkoutItem.label}</h4>
                  <p>{checkoutItem.size}</p>
                </div>
                <div className="checkout-item-quantity">
                  <p>
                    <span>Quantity :</span>
                    <span>{checkoutItem.quantity}</span>
                  </p>
                  <p>
                    <span>Price :</span>
                    <span>{`\u20B1${checkoutItem.price}`}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-order-footer">
            <h3>{`Total: \u20B11234`}</h3>
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
