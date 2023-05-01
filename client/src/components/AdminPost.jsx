import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../actions/itemActions';
import { addCategory } from '../actions/categoryActions';

import '../css/adminproductpost.css';

const AdminPost = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const categories = useSelector((state) => state.category.categories);
  const token = sessionStorage.getItem('token');

  const handleFileChange = (e) => {
    if (e.target.files[0] && e.target.files[0].type.startsWith('image/')) {
      const url = URL.createObjectURL(e.target.files[0]);
      setFileUrl(url);
      return;
    }
    const url = null;
    setFileUrl(url);
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    const formData = e.target.elements[0].value;
    dispatch(addCategory({ token, formData }));
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const categorySelect = e.target.elements[3];
    const selectedOption = categorySelect.options[categorySelect.selectedIndex];
    const selectedCategoryId = selectedOption.dataset.id;
    const sizes = [
      {
        size: 'small',
        inventory: Number(e.target.elements[4].value)
      },
      {
        size: 'medium',
        inventory: Number(e.target.elements[5].value)
      },
      {
        size: 'large',
        inventory: Number(e.target.elements[6].value)
      },
      {
        size: 'extra_large',
        inventory: Number(e.target.elements[7].value)
      }
    ];

    formData.append('label', e.target.elements[0].value);
    formData.append('description', e.target.elements[1].value);
    formData.append('price', e.target.elements[2].value);
    formData.append('category', selectedCategoryId);
    formData.append('sizes', JSON.stringify(sizes));

    for (let i = 0; i < e.target.elements.image.files.length; i++) {
      formData.append('images', e.target.elements.image.files[i]);
    }

    e.target.reset();
    setFileUrl('');

    dispatch(addItem(formData));
  };

  return (
    <div className="header-post-container">
      <details className="admin-product-post">
        <summary className="product-post-header">
          <h2>Post a product</h2>
        </summary>
        <form className="post-form" onSubmit={handleItemSubmit}>
          <label id="admin-product-name">
            Product Name:
            <input type="text" placeholder="Enter your product name here..." />
          </label>
          <label id="admin-product-description">
            Product Description:
            <input type="text" placeholder="Enter your product description here..." />
          </label>
          <label id="admin-product-price">
            Product Price:
            <input type="number" placeholder="Enter your desire price here..." min="1" />
          </label>
          <label id="admin-product-choices" className="admin-product-choices">
            Product Category: &nbsp;
            <select id="categoryList">
              {categories.map((category) => (
                <option key={category._id} data-id={category._id} value={category.category_name}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="sizes" className="post-size">
            Sizes: &nbsp;
            <div>
              S <input type="number" name="" min="0" placeholder="0" />
              M<input type="number" name="" min="0" placeholder="0" />
              L<input type="number" name="" min="0" placeholder="0" />
              XL
              <input type="number" name="" min="0" placeholder="0" />
            </div>
          </label>
          <label htmlFor="imageInput" id="admin-product-upload">
            Upload Image
            <input name="image" id="imageInput" type="file" onChange={handleFileChange} multiple />
          </label>
          <div className="image-preview">{fileUrl && <img src={fileUrl} alt="Selected file" />}</div>
          <button className="admin-post-button" type="submit">
            Post Item
          </button>
        </form>
      </details>
      <details className="admin-category-post">
        <summary className="product-post-header">
          <h2>Add a Category</h2>
        </summary>
        <form className="post-form" onSubmit={handleCategorySubmit}>
          <label id="admin-category-name">
            Category Name:
            <input type="text" placeholder="Enter your category name here..." />
          </label>
          <button className="admin-post-button" type="submit">
            Add Category
          </button>
        </form>
      </details>
    </div>
  );
};

export default AdminPost;
