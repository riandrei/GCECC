import { useState } from 'react';
import { connect, useSelector } from 'react-redux';

import { addItem } from '../actions/itemActions';

import '../css/adminproductpost.css';

const AdminProductPost = (props) => {
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0] && e.target.files[0].type.startsWith('image/')) {
      const url = URL.createObjectURL(e.target.files[0]);
      setFileUrl(url);
      return;
    }
    const url = null;
    setFileUrl(url);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const sizes = [
      {
        size: 'small',
        inventory: Number(e.target.elements[3].value)
      },
      {
        size: 'medium',
        inventory: Number(e.target.elements[4].value)
      },
      {
        size: 'large',
        inventory: Number(e.target.elements[5].value)
      },
      {
        size: 'extra_large',
        inventory: Number(e.target.elements[6].value)
      }
    ];

    formData.append('label', e.target.elements[0].value);
    formData.append('price', e.target.elements[1].value);
    formData.append('category', e.target.elements[2].value);
    formData.append('sizes', JSON.stringify(sizes));
    formData.append('image', e.target.elements.image.files[0]);

    props.addItem(formData);
  };
  console.log(useSelector((state) => state.item.items));

  return (
    <details className="admin-product-post">
      <summary className="product-post-header">
        <h2>Post a product</h2>
      </summary>
      <form className="post-form" onSubmit={handleSubmit}>
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
          Sizes: &nbsp; S <input type="number" name="" min="0" placeholder="0" />
          M<input type="number" name="" min="0" placeholder="0" />
          L<input type="number" name="" min="0" placeholder="0" />
          XL
          <input type="number" name="" min="0" placeholder="0" />
        </label>
        <label htmlFor="imageInput" id="admin-product-upload">
          Upload Image
          <input name="image" id="imageInput" type="file" onChange={handleFileChange} />
        </label>
        <div className="image-preview">{fileUrl && <img src={fileUrl} alt="Selected file" />}</div>
        <button className="admin-post-button" type="submit">
          Post Item
        </button>
      </form>
    </details>
  );
};

const mapDispatchToProps = { addItem };

export default connect(null, mapDispatchToProps)(AdminProductPost);
