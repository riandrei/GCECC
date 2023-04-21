import '../css/adminproductpost.css';

const AdminProductPost = () => {
  return (
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
  );
};

export default AdminProductPost;
