import '../css/checkout.css';
import hamburgerMenu from '../assets/hamburger-menu.png';

const Checkout = () => {
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
            <div className="checkout-order-item">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iOGA0WM95DR6mTZl6m4wSwHaE8%26pid%3DApi&f=1&ipt=2bde31797a372cc525ea00a5c8c8d78da132213fb5771c9617086f8c5ca1b9b1&ipo=images"
                alt=""
              />
              <div className="checkout-item-label">
                <h4>Testing</h4>
                <p>extra_large</p>
              </div>
              <div className="checkout-item-quantity">
                <p>
                  <span>Quantity :</span>
                  <span>{`4`}</span>
                </p>
                <p>
                  <span>Price :</span>
                  <span>{`\u20B11234`}</span>
                </p>
              </div>
            </div>
            <div className="checkout-order-item">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iOGA0WM95DR6mTZl6m4wSwHaE8%26pid%3DApi&f=1&ipt=2bde31797a372cc525ea00a5c8c8d78da132213fb5771c9617086f8c5ca1b9b1&ipo=images"
                alt=""
              />
              <div className="checkout-item-label">
                <h4>Testing</h4>
                <p>extra_large</p>
              </div>
              <div className="checkout-item-quantity">
                <p>
                  <span>Quantity :</span>
                  <span>{`4`}</span>
                </p>
                <p>
                  <span>Price :</span>
                  <span>{`\u20B11234`}</span>
                </p>
              </div>
            </div>
            <div className="checkout-order-item">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iOGA0WM95DR6mTZl6m4wSwHaE8%26pid%3DApi&f=1&ipt=2bde31797a372cc525ea00a5c8c8d78da132213fb5771c9617086f8c5ca1b9b1&ipo=images"
                alt=""
              />
              <div className="checkout-item-label">
                <h4>Testing</h4>
                <p>extra_large</p>
              </div>
              <div className="checkout-item-quantity">
                <p>
                  <span>Quantity :</span>
                  <span>{`4`}</span>
                </p>
                <p>
                  <span>Price :</span>
                  <span>{`\u20B11234`}</span>
                </p>
              </div>
            </div>
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
