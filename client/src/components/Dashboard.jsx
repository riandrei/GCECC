const Dashboard = () => {
  return (
    <div className="cart-main-container">
      <div className="cart-category">
        <div className="cart-header">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="shopping-cart">
        <div className="cart-label">
          <input className="cart-checkbox" type="checkbox" name="" id="" />
          <h2>PRODUCT</h2>
          <h2>QUANTITY</h2>
          <h2 className="price">PRICE</h2>
        </div>

        <div className="cart-footer">
          <p className="total">$50000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
