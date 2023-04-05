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
            <div className="product-contents"></div>
            <div className="container">
              <div className="container page-wrapper">
                <div className="page-inner">
                  <div className="row">
                    <div className="el-wrapper">
                      <div className="box-up">
                        {/* THE CONTENTS HERE TO PULL FROM THE DATABASE */}
                        <img src={femaleBlouse} height="300px" className="img" alt="" />
                        <div className="img-info">
                          <div className="info-inner">
                            <span className="p-name">Male Polo</span>
                            <span className="p-company">Gordon College</span>
                          </div>
                          <div className="a-size">
                            Sizes : <span className="size">S , M , L , XL</span>
                          </div>
                        </div>
                      </div>

                      <div className="box-down">
                        <div className="h-bg">
                          <div className="h-bg-inner"></div>
                        </div>

                        <p className="cart" href="#">
                          <span className="price">₱600.00</span>
                          <span className="add-to-cart">
                            <span className="txt">Add in cart</span>
                          </span>
                        </p>
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
