import Breadcrumb from './Breadcrumb';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import hamburgerMenu from '../assets/hamburger-menu.png';
import sampleShirt from '../assets/products/sample-shirt.png';
import sampleBag from '../assets/products/smp-sample-product4.png';
import sampleSportfest from '../assets/products/sportsfest-shirt-sample.png';
import sampleMerch from '../assets/products/smp-sample-product25png.jpg';

import '../css/storeItem.css';

const StoreItem = () => {
  const { itemId } = useParams();
  const items = useSelector((state) => state.item.items);
  const foundItem = items.find((item) => itemId === item._id);

  const [stock, setStock] = useState('');
  const [selectedValue, setSelectedValue] = useState('small');

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
          <img src={foundItem.img_url} className="store-item-image-main" />
          <div className="store-item-image-slider">
            <img src={sampleShirt} alt="" className="store-image-slider" />
            <img src={sampleBag} alt="" className="store-image-slider" />
            <img src={sampleSportfest} alt="" className="store-image-slider" />
            <img src={sampleMerch} alt="" className="store-image-slider" />
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit
                perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic
                commodi tempore.
              </p>
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
                  value="extra-large"
                  id="4"
                  className="size-input"
                  onChange={handleRadioChange}
                  checked={selectedValue === 'extra-large'}
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
            <div className="button add-cart">
              <i className="bx bxs-cart"></i> Add to Cart
            </div>
            <div className="button buy-now">
              <i className="bx bxs-zap"></i> Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
