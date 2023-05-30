import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import hamburgerMenu from '../assets/hamburger-menu.png';
import noImg from '../assets/no-image.jpg';

import '../css/studentMarketItem.css';

const StudentMarketItem = () => {
  const navigate = useNavigate();
  const { listingId } = useParams();
  const location = useLocation();

  const [mainImage, setMainImage] = useState('');

  const listings = useSelector((state) => state.listing.listings);
  const foundListing = listings?.find((listing) => listing._id === listingId);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (foundListing) {
      setMainImage(foundListing.img_url[0]);
    }
  }, [foundListing]);

  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };
  return !foundListing ? (
    <p>No Item Found</p>
  ) : (
    <div className="market-item-main-container" onClick={toggleNav}>
      <button onClick={toggleNav} className="admin-product-menu">
        <img className="hamburger-icon" src={hamburgerMenu} alt="" />
      </button>
      <div className="market-item-contents">
        <div className="market-item-image">
          <img src={mainImage || noImg} className="market-item-image-main" alt="" />
          <div className="market-item-image-slider">
            {foundListing.img_url.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt=""
                className="market-image-slider"
                onClick={() => setMainImage(imgUrl)}
              />
            ))}
          </div>
        </div>
        <div className="market-item-info">
          <div className="product-title">
            <h2>{foundListing.title}</h2>
          </div>
          <div className="product-price">
            <span className="offer-price">{`₱${foundListing.price}`}</span>
          </div>
          <div className="product-details">
            <h3>{`Posted by: ${foundListing.userName}`}</h3>
          </div>
          <div className="product-details">
            <h3>Description</h3>
            <p>{foundListing.description}</p>
          </div>
          <div className="product-stocks">
            <h4>Phone Number</h4>
            <p>{foundListing.phoneNumber}</p>
          </div>
          <div className="product-stocks">
            <h4>Gmail</h4>
            <p>{foundListing.userDomain}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMarketItem;
