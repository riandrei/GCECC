import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import uniformIcon from '../assets/uniformH1.png';
import femaleBlouse from '../assets/products/uniform/female-blouse.png';

import '../css/store.css';

const Store = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/`);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="main-container">
      <div className="category">
        <div className="category-title">
          <h1>School Uniforms</h1>
          <img src={uniformIcon} alt="uniform-icon" />
        </div>
        <div className="category-contents">
          <a href="gcecc-products/GC-Uniform-Polo.html">
            <div class="product-contents"></div>
            <div class="container">
              <div class="container page-wrapper">
                <div class="page-inner">
                  <div class="row">
                    <div class="el-wrapper">
                      <div class="box-up">
                        {/* THE CONTENTS HERE TO PULL FROM THE DATABASE */}
                        <img src={femaleBlouse} height="300px" class="img" alt="" />
                        <div class="img-info">
                          <div class="info-inner">
                            <span class="p-name">Male Polo</span>
                            <span class="p-company">Gordon College</span>
                          </div>
                          <div class="a-size">
                            Sizes : <span class="size">S , M , L , XL</span>
                          </div>
                        </div>
                      </div>

                      <div class="box-down">
                        <div class="h-bg">
                          <div class="h-bg-inner"></div>
                        </div>

                        <a class="cart" href="#">
                          <span class="price">₱600.00</span>
                          <span class="add-to-cart">
                            <span class="txt">Add in cart</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="category">
        <div className="category-title">
          <h1>ID Laces</h1>
          <img src={uniformIcon} alt="uniform-icon" />
        </div>
        <div className="category-contents"></div>
      </div>

      <div className="category">
        <div className="category-title">
          <h1>Sportfest Shirts</h1>
          <img src={uniformIcon} alt="uniform-icon" />
        </div>
        <div className="category-contents"></div>
      </div>
    </div>
  );
};

export default Store;
