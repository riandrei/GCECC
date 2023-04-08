import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/adminproduct.css';

const AdminProduct = () => {
  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };

  return (
    <>
      <div className="admin-product-main-container" onClick={toggleNav}>
        <button onClick={toggleNav} className="admin-product-menu">
          <img className="hamburger-icon" src={hamburgerMenu} alt="" />
        </button>

        <div className="admin-product-header">
          <h1 className="admin-product-title">Admin Dashboard</h1>
          <details className="admin-product-post">
            <summary className="product-post-header">
              <h2>Post a product</h2>
            </summary>
            <form className="post-form" action="">
              <label id="admin-product-name">
                Product Name:
                <input type="text" placeholder="Enter your product name here..." />
              </label>

              <label id="admin-product-price">
                Product Price:
                <input type="number" placeholder="Enter your desire price here..." min="1" />
              </label>

              <label htmlFor="browser" id="admin-product-contact">
                Product Category:
                <input list="browsers" name="browser" />
              </label>

              <datalist id="browsers">
                <option value="Uniform" />
                <option value="ID Lace" />
                <option value="Sportsfest Shirt" />
              </datalist>

              <label htmlFor="sizes" className="post-size">
                Sizes: &nbsp; S <input type="checkbox" name="" id="" />
                M<input type="checkbox" name="" id="" />
                L<input type="checkbox" name="" id="" />
                XL
                <input type="checkbox" name="" id="" />
              </label>

              <label id="admin-product-upload">
                <button>Upload Image</button>
                <input type="file" />
              </label>

              <button className="admin-post-button">Post Item</button>
            </form>
          </details>
        </div>

        <div className="admin-product-category">
          <div className="admin-product-category-header">
            <h3>Uniforms</h3>
          </div>
          <div className="admin-product-category-contents">
            <div className="admin-product">
              <h4>Female Blouse</h4>
              <div className="admin-product-toggle">
                <div className="toggle">
                  S
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  M
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  L
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  XL
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="admin-product">
              <h4>Female Blouse</h4>
              <div className="admin-product-toggle">
                <div className="toggle">
                  S
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  M
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  L
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  XL
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-product-category">
          <div className="admin-product-category-header">
            <h3>Sportfest Shirts</h3>
          </div>
          <div className="admin-product-category-contents">
            <div className="admin-product">
              <h4>CCS Sportfest Shirt</h4>
              <div className="admin-product-toggle">
                <div className="toggle">
                  S
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  M
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  L
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  XL
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="admin-product">
              <h4>CAHS Sportfest Shirt</h4>
              <div className="admin-product-toggle">
                <div className="toggle">
                  S
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  M
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  L
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle">
                  XL
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProduct;
