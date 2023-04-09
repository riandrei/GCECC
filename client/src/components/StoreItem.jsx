import Breadcrumb from './Breadcrumb';
import { useParams } from 'react-router-dom';

import hamburgerMenu from '../assets/hamburger-menu.png';
import sampleShirt from '../assets/products/sample-shirt.png';
import sampleBag from '../assets/products/smp-sample-product4.png';
import sampleSportfest from '../assets/products/sportsfest-shirt-sample.png';
import sampleMerch from '../assets/products/smp-sample-product25png.jpg';

import '../css/storeItem.css';

const StoreItem = () => {
  const { itemId } = useParams();

  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };

  return (
    <div className="store-item-main-container" onClick={toggleNav}>
      <button onClick={toggleNav} className="admin-product-menu">
        <img className="hamburger-icon" src={hamburgerMenu} alt="" />
      </button>
      <div className="store-item-contents">
        <div className="store-item-image">
          <img src={sampleShirt} className="store-item-image-main" />
          <div className="store-item-image-slider">
            <img src={sampleShirt} alt="" className="store-image-slider" />
            <img src={sampleBag} alt="" className="store-image-slider" />
            <img src={sampleSportfest} alt="" className="store-image-slider" />
            <img src={sampleMerch} alt="" className="store-image-slider" />
          </div>
        </div>
        <div className="store-item-info">
          <Breadcrumb />
          <div class="store-product">
            <div class="product-title">
              <h2>GC Polo Men</h2>
            </div>

            <div class="product-price">
              <span class="offer-price">₱600.00</span>
            </div>

            <div class="product-details">
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit
                perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic
                commodi tempore.
              </p>
            </div>
            <div class="product-size">
              <h4>Size</h4>
              <div class="size-layout">
                <input type="radio" name="size" value="S" id="1" class="size-input" />
                <label for="1" class="size">
                  S
                </label>

                <input type="radio" name="size" value="M" id="2" class="size-input" />
                <label for="2" class="size">
                  M
                </label>

                <input type="radio" name="size" value="L" id="3" class="size-input" />
                <label for="3" class="size">
                  L
                </label>

                <input type="radio" name="size" value="XL" id="4" class="size-input" />
                <label for="4" class="size">
                  XL
                </label>

                <input type="radio" name="size" value="XXL" id="5" class="size-input" />
                <label for="5" class="size">
                  XXL
                </label>
              </div>
            </div>
            <div class="product-stocks">
              <h4>Stocks</h4>
              <p>10 items left</p>
            </div>
          </div>
          <span class="divider"></span>

          <div class="product-btn-group">
            <div class="button add-cart">
              <i class="bx bxs-cart"></i> Add to Cart
            </div>
            <div class="button buy-now">
              <i class="bx bxs-zap"></i> Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
