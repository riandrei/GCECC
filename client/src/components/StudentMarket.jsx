import { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import Header from './Header';
import { addListing } from '../actions/listingActions';

import uniformIcon from '../assets/uniformH1.png';
import sampleProductImage from '../assets/products/smp-sample-product.jpg';
import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/studentmarketplace.css';

const StudentMarket = (props) => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const listings = useSelector((state) => state.listing.listings);
  const [fileUrls, setFileUrls] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Reset the fileUrls to an empty array when the file input is clicked again
    setFileUrls([]);

    const validImageFiles = selectedFiles.filter((file) => file.type.startsWith('image/'));

    const urls = validImageFiles.map((file) => URL.createObjectURL(file));
    setFileUrls((prevUrls) => [...prevUrls, ...urls]);
  };

  const handleListingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', e.target.elements[0].value);
    formData.append('description', e.target.elements[1].value);
    formData.append('price', e.target.elements[2].value);
    formData.append('phoneNumber', e.target.elements[3].value);
    for (let i = 0; i < e.target.elements.image.files.length; i++) {
      formData.append('images', e.target.elements.image.files[i]);
    }
    formData.append('userName', user.name);
    formData.append('userDomain', user.email);
    formData.append('userId', user.id);

    e.target.reset();
    setFileUrls([]);

    props.addListing(formData);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/`);
    }
  }, [isAuthenticated, navigate]);

  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };
  return (
    <div className="market-main-container" onClick={toggleNav}>
      <div className="market-category">
        <Header />
        <div className="market-category-title">
          <h1>Student Marketplace</h1>
        </div>
        <div className="market-category-contents">
          <form className="market-form" onSubmit={handleListingSubmit}>
            <input type="text" placeholder="Item name" />
            <input type="text" placeholder="Description" />
            <input type="number" placeholder="Price" />
            <input type="number" placeholder="Contact Number" />
            <div className="market-image">
              <label htmlFor="marketImageInput" id="market-product-upload">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>
                <input type="file" name="image" id="marketImageInput" onChange={handleFileChange} multiple />
              </label>
              <div className="market-image-preview">
                {fileUrls.length !== 0 && fileUrls.map((file) => <img key={file} src={file} alt="Selected file" />)}
              </div>
            </div>
            <button className="market-post-button" type="submit">
              Post Listing
            </button>
          </form>
          <div className="listings-container">
            {listings.map((listing) => (
              <Link key={listing._id} className="marketplace-item" to={`/user/market/${listing._id}`}>
                <div className="product">
                  <figure>
                    <img
                      src={listing.img_url[0]}
                      alt="Product Image"
                      className="product-image"
                      width="300px"
                      height="400px"
                    />
                  </figure>
                  <div className="product-description">
                    <div className="info">
                      <h1>{listing.title.length > 20 ? `${listing.title.slice(0, 17)}...` : listing.title}</h1>
                      <p>
                        {listing.description.length > 30
                          ? `${listing.description.slice(0, 26)}...`
                          : listing.description}
                      </p>
                      <p>{`Posted by: ${listing.userName}`}</p>
                    </div>

                    <div className="price">{`₱${listing.price}`}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { addListing };

export default connect(null, mapDispatchToProps)(StudentMarket);
