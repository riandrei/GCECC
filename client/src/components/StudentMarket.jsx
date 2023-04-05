import React from 'react';

import uniformIcon from '../assets/uniformH1.png';
import sampleProductImage from '../assets/products/smp-sample-product.jpg';

import '../css/studentmarketplace.css';

const StudentMarket = () => {
  return (
    <div className="market-main-container">
      <div className="market-category">
        <div className="market-category-title">
          <h1>Student Marketplace</h1>
          <img src={uniformIcon} alt="uniform-icon" />
        </div>
        <div className="market-category-contents">
          <a className="marketplace-item" href="#">
            <div class="product">
              <figure>
                <img
                  src={sampleProductImage}
                  alt="Product Image"
                  className="product-image"
                  width="300px"
                  height="400px"
                />
              </figure>
              <div className="product-description">
                <div className="info">
                  <h1>Sapatos ko</h1>
                  <p>Bilihin niyo na tapon ko to size 40 need lang pera ASAP</p>
                  <p>Posted by: Riandrei Casanas</p>
                </div>

                <div className="price">₱300</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentMarket;
