import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import { deleteCartItems } from '../actions/cartActions';
import { placeOrder } from '../actions/orderActions';

import '../css/checkout.css';
import hamburgerMenu from '../assets/hamburger-menu.png';

const Checkout = (props) => {
  const location = useLocation();
  const items = useSelector((state) => state.item.items);

  const { checkedItems } = location.state;

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const userId = user.id;

  const [name, setName] = useState(user.name);
  const [department, setDepartment] = useState('');
  const [domain, setDomain] = useState(user.email);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [validForm, setValidForm] = useState(true);

  const checkoutItems = checkedItems?.map((checkedItem, index) => {
    const item = items?.find((item) => item._id === checkedItem.itemId);

    const checkoutItem = {
      ...checkedItem,
      label: item?.label,
      img: item?.img_url[0],
      price: item?.price
    };

    return checkoutItem;
  });

  const handlePlaceOrder = () => {
    if (!!name.trim() && !!department.trim() && !!domain.trim() && !!paymentMethod.trim()) {
      setValidForm(true);

      const userDetails = { userId, name, department, domain, paymentMethod };
      const itemDetails = checkoutItems.map((checkoutItem) => {
        const newCheckoutItem = {
          _id: checkoutItem._id,
          itemId: checkoutItem.itemId,
          size: checkoutItem.size,
          quantity: checkoutItem.quantity,
          price: checkoutItem.price
        };

        return newCheckoutItem;
      });

      props.placeOrder({ token, userDetails, itemDetails });
      props.deleteCartItems({ token, userId, itemDetails });

      return;
    }
    setValidForm(false);
  };

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
          {!validForm && <p className="form-error">Please fill in all fields.</p>}

          <div className="checkout-form-section">
            <h2>Name</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="checkout-form-section">
            <h2>Department</h2>
            <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </div>
          <div className="checkout-form-section">
            <h2>Domain</h2>
            <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
          </div>
          <div className="checkout-form-section">
            <h2>Payment Method</h2>
            <div>
              <input
                type="radio"
                name="payment-methods"
                id="cash"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="cash" htmlFor="cash">
                Cash
              </label>
              <input
                type="radio"
                name="payment-methods"
                id="gcash"
                value="gcash"
                checked={paymentMethod === 'gcash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
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
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { placeOrder, deleteCartItems };

export default connect(null, mapDispatchToProps)(Checkout);
