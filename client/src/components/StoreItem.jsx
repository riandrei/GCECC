import Breadcrumb from './Breadcrumb';
import { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import hamburgerMenu from '../assets/hamburger-menu.png';

import { addCartItem } from '../actions/cartActions';

import '../css/storeItem.css';

const StoreItem = (props) => {
  const { itemId } = useParams();
  const items = useSelector((state) => state.item.items);
  const foundItem = items.find((item) => itemId === item._id);

  const [stock, setStock] = useState('');
  const [mainImage, setMainImage] = useState(foundItem.img_url[0]);
  const [selectedValue, setSelectedValue] = useState('small');

  const changeImage = (e) => {
    setMainImage(e.target.src);
  };
  const handleRadioChange = (e) => {
    const sizes = foundItem.sizes;

    setSelectedValue(e.target.value);

    sizes.forEach((size) => {
      if (size.size == e.target.value) {
        setStock(size.inventory);
      }
    });
  };
  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };
  const addToCart = () => {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    const cartItem = {
      itemId: foundItem._id,
      size: selectedValue,
      quantity: 1
    };

    props.addCartItem({ token, userId, cartItem });
  };

  if (!foundItem) {
    return <p>No Item Found</p>;
  }

  return (
    <div className="store-item-main-container" onClick={toggleNav}>
      <button onClick={toggleNav} className="admin-product-menu">
        <img className="hamburger-icon" src={hamburgerMenu} alt="" />
      </button>
      <div className="store-item-contents">
        <div className="store-item-image">
          <img src={mainImage} className="store-item-image-main" />
          <div className="store-item-image-slider">
            {foundItem.img_url.map((imgUrl) => (
              <img src={imgUrl} alt="" className="store-image-slider" onClick={changeImage} />
            ))}
          </div>
        </div>
        <div className="store-item-info">
          <Breadcrumb label={foundItem.label} />
          <div className="store-product">
            <div className="product-title">
              <h2>{foundItem.label}</h2>
            </div>

            <div className="product-price">
              <span className="offer-price">{`₱${foundItem.price}`}</span>
            </div>

            <div className="product-details">
              <h3>Description</h3>
              <p>{foundItem.description}</p>
            </div>
            <div className="product-size">
              <h4>Size</h4>
              <div className="size-layout">
                <input
                  type="radio"
                  name="size"
                  value="small"
                  id="1"
                  className="size-input"
                  onChange={handleRadioChange}
                  checked={selectedValue === 'small'}
                />
                <label htmlFor="1" className="size">
                  S
                </label>

                <input
                  type="radio"
                  name="size"
                  value="medium"
                  id="2"
                  className="size-input"
                  onChange={handleRadioChange}
                  checked={selectedValue === 'medium'}
                />
                <label htmlFor="2" className="size">
                  M
                </label>

                <input
                  type="radio"
                  name="size"
                  value="large"
                  id="3"
                  className="size-input"
                  onChange={handleRadioChange}
                  checked={selectedValue === 'large'}
                />
                <label htmlFor="3" className="size">
                  L
                </label>

                <input
                  type="radio"
                  name="size"
                  value="extra_large"
                  id="4"
                  className="size-input"
                  onChange={handleRadioChange}
                  checked={selectedValue === 'extra_large'}
                />
                <label htmlFor="4" className="size">
                  XL
                </label>
              </div>
            </div>
            <div className="product-stocks">
              <h4>Stocks</h4>
              <p>{stock || foundItem.sizes[0].inventory} items left</p>
            </div>
          </div>
          <span className="divider"></span>

          <div className="product-btn-group">
            <button onClick={addToCart} className="button add-cart">
              <i className="bx bxs-cart"></i> Add to Cart
            </button>
            <div className="button buy-now">
              <i className="bx bxs-zap"></i> Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { addCartItem };

export default connect(null, mapDispatchToProps)(StoreItem);
